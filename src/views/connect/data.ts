export {};

export const connectCodeTemplate = `
import { Network } from "@verida/client-ts";
import { VaultAccount } from "@verida/account-web-vault";
import {
  ErrorMessages,
  ProfileDetails,
  ProfileDocument,
} from "@/interface/interface";

const EventEmitter = require("events");

const LOGO_URL = "http://assets.verida.io/verida_logo.svg";

const CERAMIC_URL = "https://ceramic-clay.3boxlabs.com";

const CONTEXT_NAME = "Verida: Connect Demo";
const VERIDA_TESTNET_DEFAULT_SERVER = "https://db.testnet.verida.io:5002/";

class ConnectVault extends EventEmitter {
  private connection: any;
  private profileInstance: any;
  private account: any;
  private did?: string;
  error = {};
  profile = {};

  /**
   * Public method for initializing this app
   */
  async initApp(): Promise<void> {
    if (!this.connection) {
      await this.connect();
    }
  }

  appInitialized(): boolean {
    return this.connection !== null;
  }

  /**
   * Private method for connecting to the vault
   */
  public async connect(): Promise<void> {
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
    } as unknown as any);

    this.connection = await Network.connect({
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
  }

  private async initProfile(): Promise<void> {
    const services = this;
    const client = this.connection.getClient();
    this.profileInstance = await client.openPublicProfile(
      this.did,
      "Verida: Vault"
    );

    const cb = async function (): Promise<void> {
      const data = await services.profileInstance.getMany();
      services.profile = data.reduce(
        (result: any, item: ProfileDocument): ProfileDetails => {
          result[item.key] = item.value;
          return result;
        },
        {}
      );

      services.emit("profileChanged", services.profile);
    };

    this.profileInstance.listen(cb);
    await cb();
  }

  handleErrors(error: ErrorMessages) {
    this.error = error;
    this.emit("error", error);
  }

  async logout(): Promise<void> {
    await this.account.disconnect();
    this.connection = null;
    this.dataStore = null;
    this.currentNote = null;
    this.profileInstance = null;
    this.account = null;
    this.did = "";
    this.error = {};
    this.notes = [];
    this.profile = {};
  }
}

const connectVault = new ConnectVault();

export default connectVault;
`;
