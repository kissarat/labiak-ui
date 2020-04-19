const { db } = require('../db/knex');
const { Success } = require('../services/response');

module.exports = {
  async list(req, res) {
    const offers = await db
      .table('Offer')
      .where(req.query)
      .orderBy('offerId');
    res.json(new Success(offers));
  },

  async create(req, res) {
    const data = {
      ...req.body,
      currencyId: 'UAH'
    }
    const offer = await db.table('Offer')
      .insert(data)
      .returning('*');
    res
      // .status(201)
      .json(new Success(offer));
  },

  async update(req, res) {
    const offer = await db.table('Offer')
      .where({ offerId: req.params.offerId })
      .update(req.body)
      .returning('*');
    res.json(new Success(offer));
  },

  async delete(req, res) {
    await db.table('Offer').where({ offerId: req.params.offerId }).del();
    res
      .status(204)
      .json({ ok: 1 });
  }
};
