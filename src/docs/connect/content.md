In this tutorial, you will use the tech capabilities demo to connect to the Verida Vault. Follow this tutorial to:
&nbsp;

- Learn how the demo works
- Get started with the tech capabilities demo
- Connect to the Verida Vault
- Test and reset the connection
  &nbsp;

## How the tech capabilities demo works

&nbsp;
This tutorial explains how you can use the Verida APIs to log into the Verida ecosystem with your own Decentralized Identified (DID) using the Verida Vault.
&nbsp;

Upon running the code, it creates the standard Verida connect modal dialog that prompts you to connect to Verida Vault. You will use the Verida Vault application on your mobile device to complete the login process. Upon successful authentication, your public profile will be displayed, which indicates successful connection to the Verida Vault.

&nbsp;

## Connect to the Verida Vault

&nbsp;
To connect to the Verida Vault, start by selecting the “connect” button to initiate the login process. Upon clicking the “connect” button, the application redirects you to this screen where you can log into the Verida Vault by scanning a QR code.

<img class="md-img" src="./media/scan-qr-code-demo.png" height="450" alt="side"/>

Upon scanning the QR code using your mobile device, Verida Vault will prompt you to approve your new login request to complete the authentication process as shown below.

<img class="md-img"  src="/media/vault-login-demo.png"  height="450" />

On this Verida Vault screen, select the login button to approve your login request before it times out. You are now connected to Verida Vault.

&nbsp;

## Test and reset the connection

&nbsp;

When you successfully connect to the Verida Vault, your public profile will be displayed on the top right corner of the preview panel. To reset the connection, click on the disconnect button.

<img class="md-img"  src="./media/connected-screen.png"  height="450" />

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

You will find similar code to this sample in the _VeridaHelpers.js_ file in the interactive code below. In this case it has been structured in a way that might be more typically seen in a larger application.
&nbsp;

## Next steps:

&nbsp;

- Build on the connect demo by moving to the next scenario in this tutorial series, [send message](./send-message)

```

```
