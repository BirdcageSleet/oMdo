module.exports = {
  surveyTest: function(req, res) {
    console.log(req.headers);
    res.send({test: 'Feelings noted!'});
  }
};