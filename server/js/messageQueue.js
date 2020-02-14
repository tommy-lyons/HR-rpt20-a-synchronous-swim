const messages = []; // the storage unit for messages
// 'up', 'down', 'left', 'right'

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
  console.log(messages);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};

// starting with an empty queue
// queue values to the messages array whenever a user presses a key or submits a message
  // on the server side, we will be receiving a xxx request every time an action happens
  // that request should contain the keystrokeor submitted value in it
  //we want to receive thatvalue and store it to the messages queue?