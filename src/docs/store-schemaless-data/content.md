In this tutorial, you will use the tech capabilities demo and Verida Vault to store schemaless data. Follow this tutorial to:
&nbsp;
> * Learn how the demo works
> * Create and store schemaless data
> * Retrieve stored data
&nbsp;

## Prerequisites
&nbsp;
In order to complete this tutorial, you should have an active connection to the Verida Vault as described in the [connect section](./connect.md) of this tutorial series
&nbsp;

## How the demo works
&nbsp;
This tutorial explains how to store schemaless data in a database using the tech capabilities demo. Schemaless data does not conform to a rigid schema. It could be structured or unstructured, and does not enforce any data type limitations to the data stored. 
&nbsp;
When storing schemaless data, you create the data and save the record in a database. The demo also allows you to retrieve an encrypted or decrypted version of the data.
&nbsp; 

## Create and store schemaless data
&nbsp;
To create and save a data record, navigate to this "store schemaless data" blade of the demo and select the "store data" button, as shown below. 

![Store schemaless data](./media/store-schemaless-data.png)
&nbsp;
Upon clicking the "store data" button, the demo reconnects to the Verida Vault and navigates to the "save data" screen as shown below. If you haven't connected to the Verida Vault yet, you will be prompted to complete your connection before saving any data. 

![Save data](./media/save-data.png)
&nbsp;
While on the "save data" screen, start by entering the text string you'd like to save in the provided text box. Once done, click save data. 

&nbsp;

## Retrieve stored data
&nbsp;
The saved data will be stored in a Verida Storage Node, the default database and message server that provides encrypted database storage for end users. You can also view the data locally (unencrypted) and on the remote server (encrypted) using private keys of the user. 
&nbsp;
To view the encrypted data, select the "retrieve encrypted" button as in the screen below.

![Retrieve encrypted data](./media/retrieve-encrypted-data.png)
&nbsp;
Retrieving encrypted data will return a copy of your schemaless data as stored in the secure, encrypted Verida storage node. 

![View encrypted data](./media/encrypted-data.png)
&nbsp;
If you'd like to view a copy of the decrypted data, select the "retrieve decrypted" button, which shows you the original text string you provided in the input field. 

![View decrypted data](./media/decrypted-data.png)

Once done, you can clear the message and hit the "Reset" button to reset the edited code to it's default state. 
&nbsp;
## Code example
&nbsp;
Below is an example code sample showing how to store schemaless data in the Verida storage node. 
&nbsp;

```tsx
import { Network } from "@verida/client-ts";
import { VaultAccount } from "@verida/account-web-vault";

const EventEmitter = require("events");

const LOGO_URL = "http://assets.verida.io/verida_logo.svg";

const CERAMIC_URL = "https://ceramic-clay.3boxlabs.com";

const CONTEXT_NAME = "Verida: Tech Capabilities Demo";
const VERIDA_TESTNET_DEFAULT_SERVER = "https://db.testnet.verida.io:5002/";

const TEST_DATASTORE_SCHEMA = "https://27tqk.csb.app/schemas/store-data.json";

class VeridaHelpers extends EventEmitter {
  ....
  async saveInDatabase(data) {
    await this.database.save(data);
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

    .....
  }
}

const veridaHelpers = new VeridaHelpers();

export default veridaHelpers;
```
&nbsp;
## Next steps:
&nbsp;
* Build on the store schemaless data demo by moving to the next scenario in this tutorial series, [store data with schema](./store-data)