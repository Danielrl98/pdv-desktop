const Database = require('better-sqlite3');

const dbPath = './banco.db';

export function connect() {
  const database = new Database(dbPath);
  database.pragma('journal_mode = WAL');
  return database;
}
