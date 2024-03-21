import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  // Create a connection to database and version used
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify database and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up the desired object store
  const store = tx.objectStore('jate');
  // Use .add() method on store and pass in content
  const request = store.put({ id: 1, value: content });
  // Get confirmation of request
  const result = await request;
  console.log('Data saved to database', result);
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  // Create a connection to database and version used
  const jateDb = await openDB('jate', 1);
  // Create a new transaction, specify database and data privileges
  const tx = jateDb.transaction('jate', 'readonly');
  // Open up desired object store
  const store = tx.objectStore('jate');
  // Use .getAll() method to get all data in database
  const request = store.getAll();
  // Get confirmation of request
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

initdb();