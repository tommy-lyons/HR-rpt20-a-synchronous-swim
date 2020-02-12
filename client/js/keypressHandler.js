//import httpHandler from './httpHandler.js';

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  // console.log(event);
  // var sPress= event.key.match(/s/);

  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
  // if (sPress) {
  // // call get request with a callback to call swimTeam.move(randomMessage);
  // ajaxRandomGet(SwimTeam.move);
  // }
});



////

console.log('Client is running in the browser!');
