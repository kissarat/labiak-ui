const FastifyWebsocket = require('fastify-websocket');

function handle(conn) {
  // conn.pipe(conn);
  conn.on('data', data => {
    // console.log(data.toString('utf8'));
    conn.write(JSON.stringify({ data: data.toString("utf8") }));
  })
}

const websoket = app => {
  app.register(FastifyWebsocket, {
    handle,
    options: {
      path: '/api/v1/websocket'
    }
  });
}

module.exports = websoket;
