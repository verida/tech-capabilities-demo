import { Network, EnvironmentType } from "@verida/client-ts";
import { VaultAccount } from "@verida/account-web-vault";

const EventEmitter = require("events");

const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET;
const LOGO_URL = "http://assets.verida.io/verida_logo.svg";

const CONTEXT_NAME = "Verida: Tech Capabilities Demo";
const VERIDA_TESTNET_DEFAULT_SERVER = "https://db.testnet.verida.io:5002/";

const TEST_DATASTORE_SCHEMA = "https://27tqk.csb.app/schemas/store-data.json";

class VeridaHelpers extends EventEmitter {
  context = {};
  account = null;
  did = "";
  error = {};
  profile = {};
  database = {};
  dataStore = {};

  /**
   * Public method for initializing this app
   */
  async initApp() {
    if (!this.context) {
      await this.connect();
    }
  }

  appInitialized() {
    return this.context !== null;
  }

  async connect() {
    this.account = new VaultAccount({
      defaultDatabaseServer: {
        type: "VeridaDatabase",
        endpointUri: VERIDA_TESTNET_DEFAULT_SERVER,
      },
      defaultMessageServer: {
        type: "VeridaMessage",
        endpointUri: VERIDA_TESTNET_DEFAULT_SERVER,
      },
      vaultConfig: {
        logoUrl: LOGO_URL,
      },
    });

    this.context = await Network.connect({
      client: {
        environment: VERIDA_ENVIRONMENT,
      },
      account: this.account,
      context: {
        name: CONTEXT_NAME,
      },
    });

    if (!this.context) {
      this.emit("authCancelled", "cancel");
      return;
    }

    this.did = await this.account.did();
    await this.initProfile();

    this.emit("initialized");

    this.database = await this.context?.openDatabase("test_db");
    this.dataStore = await this.context?.openDatastore(TEST_DATASTORE_SCHEMA);
  }

  async initProfile() {
    try {
      const client = await this.context.getClient();
      const profile = await client.openPublicProfile(this.did, "Verida: Vault");
      const cb = async () => {
        const data = await profile.getMany();
        this.profile = {
          name: data.name,
          country: data.country,
          avatar: data.avatar?.uri || "",
        };
        this.emit("profileChanged", this.profile);
      };
      profile.listen(cb);
      await cb();
    } catch (error) {
      console.log("User", { error });
    }
  }

  async saveInDatabase(data) {
    await this.database.save(data);
    return true;
  }

  async saveInDataStore(data) {
    await this.dataStore.save(data);
    return true;
  }

  async getEncryptedData() {
    const items = await this.database.getMany();
    const item = items.slice(-1)[0];
    const remoteData = await this.database._remoteDbEncrypted.get(item._id);
    return remoteData;
  }

  async getDecryptedData() {
    const items = await this.database.getMany();
    const item = items.slice(-1)[0];
    const localData = await this.database._localDb.get(item._id);

    return localData;
  }

  async getDatastoreItems() {
    const items = await this.dataStore.getMany();
    return items;
  }

  async sendMessage(message, title) {
    const type = "inbox/type/dataSend";
    try {
      const data = {
        data: [message],
      };

      const config = {
        recipientContextName: "Verida: Vault",
      };
      const messaging = await this.context.getMessaging();
      const response = await messaging.send(
        this.did,
        type,
        data,
        title,
        config
      );
      return response;
    } catch (error) {
      console.log("messenger error", { error });
    }
  }

  async requestUserData(did) {
    const type = "inbox/type/dataRequest";
    const data = {
      requestSchema:
        "https://common.schemas.verida.io/social/contact/v0.1.0/schema.json",
      filter: {},
      userSelect: true,
    };
    const message = "Please share your contact details";
    const config = {
      recipientContextName: "Verida: Vault",
    };
    const messaging = await this.context.getMessaging();
    await messaging.send(did, type, data, message, config);
  }

  handleErrors(error) {
    this.error = error;
    this.emit("error", error);
  }

  async logout() {
    await this.context.getAccount().disconnect(CONTEXT_NAME);
    this.context = null;
    this.account = null;
    this.did = "";
    this.database = "";
    this.error = {};
    this.profile = {};
  }
}

const veridaHelpers = new VeridaHelpers();

export default veridaHelpers;
