const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', () => {
    console.log("You're connected to the game server!");
    conn.write("Name: Mel");
    conn.write("Move: up");
  });

  conn.on('data', () => {
    console.log('You dedd cause you idled');
  });
  conn.setEncoding('utf8');
  return conn;
};

module.exports = connect;


// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)