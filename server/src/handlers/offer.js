const { db } = require('../db/knex');
const { Success } = require('../services/response');

module.exports = {
  async list(req, res) {
    const offers = await db.table('Offer').orderBy('offerId');
    res.json(new Success(offers));
  },

  async create(req, res) {
    await db.table('Offer')
      .insert(data);
    res
      .status(201)
      .json({ ok: 1 });
  },

  async update(req, res) {
    await db.table('Offer')
      .where({ offerId: req.offerId })
      .update(data);
    res.json({ ok: 1 });
  },

  async delete(req, res) {
    await db.table('Offer')
      .where({ offerId: req.offerId })
      .del(data);
    res
      .status(204)
      .json({ ok: 1 });
  }
};
