function wrapErrorHandler(handler) {
  return async function(req, res) {
    try {
      await handler(req, res);
    } catch(err) {
      console.error(err);
      res
        .status(500)
        .json({
          ok: 0,
          type: err.constructor ? err.constructor.name : 'Error',
          message: err.message || err.toString(),
          data: []
        })
    }
  }
}

module.exports = { wrapErrorHandler };
