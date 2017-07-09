var less = require('less');

less.render('.cl; a; s; s  width: (1 + 1 }', function (e, output) {
  // console.log( e );
  // console.log(output.css);
  if ( !e ) {
    console.log( output.css );
  }
});