var _lastMsgTime = 0;

var retrieve = function() {
  $.get('https://api.parse.com/1/classes/chatterbox', function(data) {
    _(data.results).each(function(obj) {
      if ( new Date(obj.createdAt) > new Date(_lastMsgTime) ) {
        _lastMsgTime = new Date(obj.createdAt);
        $('.messages').append('<span>' + obj.username + ': ' + obj.text + '</span>');
      }
    });
  });
};

var send = function(string) {
  console.log( $('.userInput').val() );
  $('.userInput').val();
};

setInterval(retrieve, 1000);