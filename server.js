var connect = require('connect')
  , http = require('http')
  , app
  ;

app = connect()
.use(connect.static('app'))
.listen(80);
;


console.log('listening on server 80');