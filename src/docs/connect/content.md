In this tutorial, you will use the tech capabilities demo to connect to the Verida Vault. Follow this tutorial to:
&nbsp;

> - Learn how the demo works
> - Get started with the tech capabilities demo
> - Connect to the Verida Vault
> - Test and reset the connection
>   &nbsp;

## How the tech capabilities demo works

&nbsp;

This tutorial explains how you can use the tech capabilities demo to connect to the Verida Vault. The demo provides an interactive live code editor that you can optionally use to edit and test your code. All changes to the code will reflect on the right-side panel, where you also find a detailed description of any errors or problems in your code. In case you'd like it, there's a link to the code sandbox which you could open to continue having a play around the different scenarios.
&nbsp;
Upon running the code, it creates the standard Verida connect modal dialog that prompts you to connect to Verida Vault. You will use the Verida Vault application on your mobile device to complete the login process. Upon successful authentication, your public profile will be displayed, which indicates successful connection to the Verida Vault.

This tutorial explains how you can use the Verida APIs to log into the Verida ecosystem with your own Decentralized Identified (DID) using the Verida Vault.
&nbsp;

The demo provides an interactive live code editor that you can use to edit code and try out the Verida APIs. All changes to the code will reflect on the right-side panel, where you also find a detailed description of any errors or problems in your code. In case you'd like it, there's a link to the code sandbox which you could open to continue having a play around the different scenarios.
&nbsp;

## Getting started

&nbsp;
There are two ways of running the tech capabilities demo - using this deployed version or getting an instance of the demo project running on your local dev box. If you prefer the latter, complete these prerequisites before initializing a connection to the Verida Vault.
&nbsp;

- Get [Vue.js](https://vuejs.org/) running on a local web server.
  &nbsp;
- Install a code editor such as [Visual Studio Code](https://code.visualstudio.com/).
  &nbsp;
- Clone the [tech capabilities demo repository](https://github.com/verida/tech-capabilities-demo).
  `git clone https://github.com/verida/tech-capabilities-demo`
  &nbsp;
- Pull from origin to get the most recent updates:
  `git pull origin develop`
  &nbsp;
- Get the demo project running on your local dev box by:

  - Setting up the project: `npm install`

  - Compiling a minified production build: `npm run build`

  - Initializing a development build: `npm run serve`
    &nbsp;
    `npm run serve` starts the tech capabilities demo on port 8080 (or the configured port) of your local host web server, which provides equivalent functionalities to this deployed version.

Upon running the code, it creates the standard Verida connect modal dialog that prompts you to connect to Verida Vault. You will use the Verida Vault application on your mobile device to complete the login process. Upon successful authentication, your public profile will be displayed, which indicates successful connection to the Verida Vault.

&nbsp;

## Connect to the Verida Vault

&nbsp;
To connect to the Verida Vault, start by selecting the “connect” button to initiate the login process. Upon clicking the “connect” button, the application redirects you to this screen where you can log into the Verida Vault by scanning a QR code.

<img class="md-img" src="./media/scan-qr-code.png" height="450" alt="side"/>

Upon scanning the QR code using your mobile device, Verida Vault will prompt you to approve your new login request to complete the authentication process as shown below.

<img class="md-img"  src="/media/vault-login.png"  height="450" />

On this Verida Vault screen, select the login button to approve your login request before it times out. You are now connected to Verida Vault.

&nbsp;

## Test and reset the connection

&nbsp;

When you successfully connect to the Verida Vault, your public profile will be displayed on the top right corner of the preview panel. To reset the connection, click on the disconnect button.

<img class="md-img"  src="./media/connected.PNG"  height="450" />

&nbsp;

## Code example

&nbsp;

A minimal sample for connecting to the Vault looks like this.

---

```js
import { Network, EnvironmentType } from "@verida/client-ts";
import { VaultAccount } from "@verida/account-web-vault";

const EventEmitter = require("events");

const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET;
const LOGO_URL = "http://assets.verida.io/verida_logo.svg";

const CONTEXT_NAME = "Verida: Tech Capabilities Demo";
const VERIDA_TESTNET_DEFAULT_SERVER = "https://db.testnet.verida.io:5002/";

const CONTEXT_NAME = "Verida: Sandbox Demo";
const VERIDA_TESTNET_DEFAULT_SERVER = "https://db.testnet.verida.io:5002/";

const account = new window.VaultAccount({
  defaultDatabaseServer: {
    type: "VeridaDatabase",
    endpointUri: VERIDA_TESTNET_DEFAULT_SERVER,
  },
  defaultMessageServer: {
    type: "VeridaMessage",
    endpointUri: VERIDA_TESTNET_DEFAULT_SERVER,
  },
});

const context = await window.Network.connect({
  client: {
    environment: "testnet",
  },
  account: account,
  context: {
    name: CONTEXT_NAME,
  },
});

const did = await account.did();
console.log("User is connected with DID: " + did);
```

You will find similar code to this sample in the `VeridaHelpers.js` file in the interactive code below. In this case it has been structured in a way that might be more typically seen in a larger application.

/\*\*

- Public method for initializing this app
  \*/
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

    this.database = await this.context.openDatabase("test_db");
    this.dataStore = await this.context.openDatastore(TEST_DATASTORE_SCHEMA);

}

async initProfile() {
try {
const client = await this.context.getClient();
const profile = await client.openPublicProfile(this.did, "Verida: Vault");
const cb = async () => {
const data = await profile.getMany();
this.profile = data.reduce((result, item) => {
result[item.key] = item.value;
return result;
}, {});
this.emit("profileChanged", this.profile);
};
profile.listen(cb);
await cb();
} catch (error) {
console.log("User", { error });
}
}

handleErrors(error) {
this.error = error;
this.emit("error", error);
}

async logout() {
await this.account.disconnect();
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

```


&nbsp;

## Next steps:

&nbsp;

- Build on the connect demo by moving to the next scenario in this tutorial series, [send message](./send-message)
```
