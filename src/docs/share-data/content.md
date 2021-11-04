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

## Code example

---

```tsx
...

class VeridaHelpers extends EventEmitter {
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
}

const veridaHelpers = new VeridaHelpers();

export default veridaHelpers;
```
