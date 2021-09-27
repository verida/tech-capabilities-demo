export const codeDemo = `

const did = 'did:3:kjzl6cwe1jw148u6wjwyd232ho7r59n02jwn26y1z86cshwjq1j5dkvnil0zspr';
const type = 'inbox/type/dataSend';

// Generate an inbox message containing an array of data
const data = {
  data: [
    {
      name: 'Vitalik Buterin',
      firstName: 'Vitalik',
      lastName: 'Buterin',
      email: 'me@vitalik.eth',
      schema: 'https://schemas.verida.io/social/contact/schema.json'
    }
  ]
};

const message = 'New contact: ' + data.data.name;
const config = {
  recipientContextName: 'Verida: Vault'
};

const messaging = await context.getMessaging();
messaging.send(did, type, data, message, config)


`;
