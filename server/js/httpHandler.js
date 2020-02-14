const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue.js');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  res.writeHead(200, headers);
  var direction = ['up', 'down', 'right', 'left'];
  var randomDirection = direction[Math.floor(Math.random()*4)];
  if (req.method === 'GET') {
    var data = req.url.slice(req.url.length-1);
    if (data === 'S') {
      res.write(messages.dequeue());
      console.log("from the queue");
    } else {
      res.write(randomDirection);
      console.log('random');
    }
  }
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
