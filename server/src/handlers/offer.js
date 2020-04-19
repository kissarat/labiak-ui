const { Success } = require('../services/response');
const { NotFoundError } = require('../services/error');

module.exports = {
  async list(req, res) {
    const offers = await req.services.offer.list(req.query);
    res.json(new Success(offers));
  },

  async create(req, res) {
    const offer = await req.services.offer.create(req.body);
    res
      .status(201)
      .json(new Success(offer));
  },

  async update(req, res) {
    const offer = await req.services.offer.update(
      req.params.offerId,
      req.body
    );
    if (!offer) {
      throw new NotFoundError('Offer', { offerId: req.params.offerId });
    }
    res.json(new Success(offer));
  },

  async delete(req, res) {
    const r = await req.services.offer.delete(req.params.offerId);
    console.log(r);
    res.status(204).end();
  }
};
