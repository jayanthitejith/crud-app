// test.js
const client = require('../db');

beforeAll(async () => {
  await client.connect();
  await client.query('CREATE TABLE IF NOT EXISTS test_messages (id SERIAL PRIMARY KEY, text TEXT)');
});

afterAll(async () => {
  await client.query('DROP TABLE IF EXISTS test_messages');
  await client.end();
});

test('Inserts and selects from PostgreSQL', async () => {
  await client.query('INSERT INTO test_messages (text) VALUES ($1)', ['Test passed']);
  const res = await client.query('SELECT * FROM test_messages');
  expect(res.rows.length).toBe(1);
  expect(res.rows[0].text).toBe('Test passed');
});
