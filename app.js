const routes = require('./routes/');
//var express = require('express');
var app = express();
//var routes = express.Router();

//routes are usually are others files
app.use('/', routes);


var nunjucks = require('nunjucks');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};





nunjucks.configure('views', {noCache: true});

// you don't need this because you're telling it to use nunjucks render;
// if you use res render in actual file, it should work
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

//when encountering HTML files, use this to render it
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates







// use = whatever type of request (put, delete, etc)
// use = is the one to use for middleware
// route middleware that will happen on every request
appRouter.use('/user/:id', function(req, res, next) {
    //log each request to the console
    console.log('Time: ', Date.now());
    //continue what you were doing and go to the route
    next();
});

// nesting fns inside .use spits out results in order
appRouter.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})


appRouter.use('/special/', function (req, res, next) {
  console.log('You reached the special area: ', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// .get a response to specific to a get request ... like on this request, do this
// put = update; delete .. needs database to do that stuff
// : is a parameter - see docs
appRouter.get('/user/:id', function (req, res, next) {
  res.send('USER')
})

appRouter.get('/special/', function (req, res, next) {
  res.send('You reached the special page!')
})

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// home page route (localhost:3000)
appRouter.get('/', function(req, res) {
    res.status(200);
    res.render( 'index', {title: 'Hall of Fame', people: people} );
});

// news page (localhost:3000/news)
appRouter.get('/news', function(req, res) {
    res.send('News page!')
});

//app.use('/', appRouter);





// makes the server run
app.listen(3000, function() {
    console.log('server listening')
});





