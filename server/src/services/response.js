class HttpResponse {
  constructor() {
    this.type = this.constructor.name;
  }
}

class Success extends HttpResponse {
  constructor(data, count = data.length) {
    super();
    this.ok = 1;
    this.count = count;
    this.data = data;
  }
}

module.exports = { Success };
