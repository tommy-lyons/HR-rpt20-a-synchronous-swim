const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue.js');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('./', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  var direction = ['up', 'down', 'right', 'left'];
  var randomDirection = direction[Math.floor(Math.random()*4)];
  if (req.method === 'GET') {
    var data = req.url.slice(req.url.length-1);
    if (data === 'S') {
      res.write(messages.dequeue());
      res.writeHead(200, headers);
      console.log("from the queue");
    } else if (req.url === '/background.jpg') {
      console.log('image requested');
      fs.readFile(module.exports.backgroundImageFile, (err, data) => {
        if (err) {
          res.writeHead(404, headers);
        }
        else {
          res.writeHead(200, headers);
          res.write(data);
        }
      });
    } else if (req.url === '/random') {
      res.write(randomDirection);
      res.writeHead(200, headers);
      console.log('random');
    } else {
      res.writeHead(404, headers);
    }
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
  }
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};


