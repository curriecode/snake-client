const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', () => {
    console.log("You're connected to the game server!");
    conn.write("Name: Mel");
  });
  conn.on('data', () => {
    console.log('You dedd cause you idled');
  });
  conn.setEncoding('utf8');
  return conn;
};

module.exports = connect;