var express = require('express');
// const twitterApp = express();
var app = express();



// // instance of Router
var appRouter = express.Router();

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

// home page route (localhost:3000)
appRouter.get('/', function(req, res) {
    res.status(200);
    res.send('Home page!')
});

// news page (localhost:3000/news)
appRouter.get('/news', function(req, res) {
    res.send('News page!')
});

app.use('/', appRouter);

//routes are usually are others files

// makes the server run
app.listen(3000, function() {
    console.log('server listening')
});