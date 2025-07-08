// index.js
const client = require('./db');

async function main() {
  await client.connect();
  await client.query('CREATE TABLE IF NOT EXISTS messages (id SERIAL PRIMARY KEY, text TEXT)');
  await client.query('INSERT INTO messages (text) VALUES ($1)', ['Hello from CI!']);
  const res = await client.query('SELECT * FROM messages');
  console.log(res.rows);
  await client.end();
}

main();
