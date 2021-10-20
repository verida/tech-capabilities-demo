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


class VeridaHelpers extends EventEmitter {

 ....
  async saveInDataStore(data) {
    await this.dataStore.save(data);
    return true;
  }

  async getDatastoreItems() {
    const items = await this.dataStore.getMany();
    return items;
  }

  ....
}

const veridaHelpers = new VeridaHelpers();

export default veridaHelpers;
```
