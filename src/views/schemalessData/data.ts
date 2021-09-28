export const codeDemo = `

// Open / create a test database
const db = await context.openDatabase('test_db');
const item = await db.save({
  hello: 'world'
});
const items = await db.getMany();
console.log(items);

// Show the data stored in the local (unencrypted) database and the remote (encrypted) database
const localData = await db._localDb.allDocs({include_docs: true});
console.log("Local data", localData);

const remoteData = await db._remoteDbEncrypted.allDocs({include_docs: true});
console.log("Remote data", remoteData)


`;
