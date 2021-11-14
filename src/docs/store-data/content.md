In this tutorial, you will use the tech capabilities demo and Verida Vault to store data with schema. Follow this tutorial to:
&nbsp;

- Learn how the demo works
- Create and store data with schema

&nbsp;
Verida can use JSON Schemas to define structured storage. By using this multiple applications are able to understand data shared between them. The schema will automatically enforce validation and required fields defined in the schema.

&nbsp;

If you instead want to store schemaless data, please refer to the [store schemaless data](./schemaless-data) tutorial.

&nbsp;

## Prerequisites

&nbsp;
In order to complete this tutorial, you should have an active connection to the Verida Vault as described in the [connect section](./connect) of this tutorial series
&nbsp;

## How the demo works

&nbsp;
This tutorial explains how to store data with schema in a datastore using the tech capabilities demo. Data with schema adheres to specific constraints that define how the data is stored.
&nbsp;
When storing data with schema, you need to enter all data fields as defined in the schema. Once the record is populated with all required data fields, you can successfully save the data. However, if you try saving an incomplete record, the demo will return an error message.
&nbsp;

## Create and store data with schema

&nbsp;
To create and save a record, navigate to the "store data with schema" blade of the demo and select the "store data" button, as shown below.

<img class="md-img"  src="./media/store-data-with-schema-demo.png"  height="450" />

&nbsp;

Upon clicking the "store data" button, the demo reconnects to Verida Vault and redirects you to the "save data" screen, as shown below. If you haven't connected to the Verida Vault yet, you will be prompted to complete the connection process before saving any data.

<img class="md-img"  src="./media/store-data-with-schema-demo.png"  height="450" />

&nbsp;
While on the "save data" screen, enter all the required data fields depending on the schema you're using. In this example, we're using a simple social contact schema that requires the user to provide their first name, last name, and email before saving the record into a datastore.

<img class="md-img"  src="./media/input-text-fields-demo.png"  height="450" />

&nbsp;
Unlike database, Verida datastores provide a fixed schema that must be validated before a record is saved. This allows data to be shared or synchronised across multiple applications that use the same schema. If you try saving an incomplete record into a datastore, an error is returned because some required data fields are missing.
&nbsp;
In the example below, we try saving a social contact record with an intentional error in the email field (invalid email) and the application generates an error message.

<img class="md-img"  src="./media/error-saving-data-demo.png"  height="450" />

&nbsp;

## Code example

&nbsp;
Below is an example code sample showing how to store data with schema.
&nbsp;

```tsx
...


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

  ...
}

const veridaHelpers = new VeridaHelpers();

export default veridaHelpers;
```
