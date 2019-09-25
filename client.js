const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.on('data', () => {
    console.log('You dedd cause you idled');
  });
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;