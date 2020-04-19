class StatusError extends Error {
  constructor(status, where, message) {
    super(message);
    this.status = status;
    this.type = this.constructor.name;
    this.where = where;
  }
}

class NamedError extends StatusError {
  constructor(status, name, where, message) {
    super(status, where, message);
    this.name = name;
  }
}

class NotFoundError extends NamedError {
  constructor(name, where, message = 'Not found') {
    super(404, name, where, message);
  }
}

function wrapErrorHandler(handler) {
  return async function(req, res) {
    try {
      await handler(req, res);
    } catch(err) {
      console.error(err);
      if (err instanceof StatusError) {
        res
          .status(err.status)
          .json(err)
      } else {
        res
          .status(500)
          .json({
            status: 500,
            type: err.constructor ? err.constructor.name : 'Error',
            message: err.message || err.toString()
          });
      }
    }
  }
}

module.exports = { wrapErrorHandler, StatusError, NamedError, NotFoundError };
