import { Network } from "@verida/client-ts";
import { VaultAccount } from "@verida/account-web-vault";

const EventEmitter = require("events");

const LOGO_URL = "http://assets.verida.io/verida_logo.svg";

const CERAMIC_URL = "https://ceramic-clay.3boxlabs.com";

const CONTEXT_NAME = "Verida: Connect Demo";
const VERIDA_TESTNET_DEFAULT_SERVER = "https://db.testnet.verida.io:5002/";

const TEST_DATASTORE_SCHEMA = "https://8igsn.csb.app/schemas/schema.json";

class VeridaHelpers extends EventEmitter {
  context = {};
  profileInstance = {};
  account = null;
  did = "";
  error = {};
  profile = {};
  schemalessDb = {};
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
        ceramicUrl: CERAMIC_URL,
      },
      account: this.account,
      context: {
        name: CONTEXT_NAME,
      },
    });

    this.did = await this.account.did();
    await this.initProfile();

    this.emit("initialized");

    this.schemalessDb = await this.context.openDatabase("test_db");
    this.dataStore = await this.context.openDatastore(TEST_DATASTORE_SCHEMA);
  }

  async initProfile() {
    const services = this;
    const client = this.context.getClient();
    this.profileInstance = await client.openPublicProfile(
      this.did,
      "Verida: Vault"
    );

    const cb = async function () {
      const data = await services.profileInstance.getMany();
      services.profile = data.reduce((result, item) => {
        result[item.key] = item.value;
        return result;
      }, {});

      services.emit("profileChanged", services.profile);
    };

    this.profileInstance.listen(cb);
    await cb();
  }

  async saveInDatabase(data) {
    await this.schemalessDb.save(data);
    return true;
  }

  async saveInDataStore(data) {
    const res = await this.dataStore.save(data);
    console.log(data, res);

    return true;
  }

  async getEncryptedData() {
    const items = await this.schemalessDb.getMany();
    const item = items.slice(-1)[0];
    const remoteData = await this.db._remoteDbEncrypted.get(item._id);
    return remoteData;
  }

  async getDecryptedData() {
    const items = await this.schemalessDb.getMany();
    const item = items.slice(-1)[0];
    const localData = await this.schemalessDb._localDb.get(item._id);

    return localData;
  }

  async sendMessage(messageData) {
    const type = "inbox/type/dataSend";
    try {
      // Generate an inbox message containing an array of data
      const data = {
        data: [messageData],
      };

      const message = "New Message: " + data.data[0].title;
      const config = {
        recipientContextName: "Verida: Vault",
      };

      const messaging = await this.context.getMessaging();
      await messaging.send(this.did, type, data, message, config);
    } catch (error) {
      console.log("messager error", { error });
    }
  }

  handleErrors(error) {
    this.error = error;
    this.emit("error", error);
  }

  async logout() {
    await this.account.disconnect();
    this.context = null;
    this.profileInstance = null;
    this.account = null;
    this.did = "";
    this.schemalessDb = "";
    this.error = {};
    this.profile = {};
  }
}

const veridaHelpers = new VeridaHelpers();

export default veridaHelpers;
