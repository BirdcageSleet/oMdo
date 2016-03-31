module.exports = {
  dbErrorHandler: function(next, message) {
    return function(error) {
      next(new Error(message || 'There was a problem with the database:', error));
    }
  },
  tokenErrorHandler: function(next, message) {
    return function(error) {
      next(new Error(message || 'Token not found!'));
    }
  }
}
