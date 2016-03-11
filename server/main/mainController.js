module.exports = {
  helloWorld: function(req, res, next) {
    next();
    res.send('Hello Birdcage & Sleet');
  },
  errorHandler: function(error) {
    console.log('There was an error in main:', error);
    res.status(500).send();
  }
}
