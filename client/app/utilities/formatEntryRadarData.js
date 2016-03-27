module.exports = function(data){
  var irrelevantFields = {
    'surveyId': true,
    '__v': true,
    '_id': true,
    'createdOn': true,
    'createdBy': true,
    'eventElaborate': true,
    'moodElaborate': true,
    'majorEvent': true,
    'sleepElaborate': true
  };
  var relevantLabels = Object.keys(data[0]).filter(function(field) {
    return !irrelevantFields[field];
  });

  var dataPlots = [];
  var dates = [];
  var i = data.length-1;
  var setsToGo  = (data.length >= 7) ? 7 : data.length;

  while (setsToGo > 0 ) {
    dataPlots[i] = [];
    for (var k = 0; k < relevantLabels.length; k++) {
      var field = relevantLabels[k];
      dataPlots[i].push(data[i][field] * 10);
      dates.push(data[i].createdOn.substr(0,10));
    }
    setsToGo -= 1;
    i -= 1;
  }
  var radarPlots = [];
  var fillColors = ['rgba(102,0,204,0.4)', 'rgba(255,0,0,0.4)', 'rgba(255,153,51,0.4)','rgba(255,255,0,0.4)','rgba(0,204,0,0.4)','rgba(51,153,255,0.4)','rgba(0,0,255,0.4)'];
  for (var j = 0; j < dataPlots.length; j++) {
    radarPlots.push({
      label: dates[j],
      strokeColor: fillColors[j],
      pointColor: fillColors[j],
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: fillColors[j],
      fillColor: fillColors[j],
      data: dataPlots[j]
    });
  }
  var radarData = {
    labels: relevantLabels,
    datasets: radarPlots
  };

  return radarData;
};
