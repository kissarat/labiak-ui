const { db } = require('../db/knex');

class Service {
  constructor(services) {
    this.services = services;
  }

  async transaction(callback) {
    if (this.services.trx) {
      return callback(this.services.trx);
    }
    let result;
    try {
      this.services.trx = await db.transaction();
      result = await callback(this.services.trx);
      await this.services.trx.commit();
    } catch (err) {
      await this.services.trx.rollback();
      throw err;
    } finally {
      this.services.trx = null;
    }
    return result;
  }

  table(name, callback) {
    return this.transaction(t => callback(db.table(name).transacting(t), t));
  }
}

module.exports = { Service };
