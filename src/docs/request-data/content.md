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

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

### Code example

```ts

...

class VeridaHelpers extends EventEmitter {

...

  async requestUserData(did) {
    const type = "inbox/type/dataRequest";
    const data = {
      requestSchema: "https://schemas.verida.io/social/contact/schema.json",
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
...
}

const veridaHelpers = new VeridaHelpers();

export default veridaHelpers;
```
