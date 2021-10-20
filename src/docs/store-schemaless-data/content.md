Hello new component elit etiam eget dictum nunc elementum auctor urna. Morbi vestibulum, et, nunc, consequat lacus, morbi mattis. Scelerisque in ornare ac lobortis dictum lobortis suspendisse turpis ridiculus. At sollicitudin quam pellentesque cras faucibus.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

Facilisis dui elit etiam eget dictum nunc elementum auctor urna. Morbi vestibulum, et, nunc, consequat lacus, morbi mattis. Scelerisque in ornare ac lobortis dictum lobortis suspendisse turpis ridiculus. At sollicitudin quam pellentesque cras faucibus.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
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
