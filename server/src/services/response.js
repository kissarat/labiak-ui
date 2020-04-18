class Success {
  constructor(data, count = data.length) {
    this.ok = 1;
    this.type = 'Success';
    this.count = count;
    this.data = data;
  }
}

module.exports = { Success };
