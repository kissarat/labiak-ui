const { Service } = require('../service');

class ParamService extends Service {
  list(params) {
    return this.table('Param', (q) => q.where(params).orderBy('paramId'));
  }
}

module.exports = { ParamService };
