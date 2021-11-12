const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = lowdb(adapter);

db.defaults({
  users: [],
  articles: []
}).write();

module.exports = db;