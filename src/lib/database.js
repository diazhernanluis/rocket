const { MongoClient } = require('mongodb');
const { db } = require('../../config/index');

const client = new MongoClient(db.connectionString);

class MongoConnection {
  static async open() {
    if (global.db) return global.db;
    try {
      await client.connect();
      global.db = client.db(db.dbname);
      console.log('.-Connection to DB established-.');
      return global.db;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async close() {
    await global.db.close();
    return true;
  }
}

module.exports = {
    MongoConnection
}