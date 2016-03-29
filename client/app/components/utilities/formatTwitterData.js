module.exports = function(data){
  var emotional = data[0].tones;
  var writing = data[1].tones;
  var social = data[2].tones;
  var labels = [];
  var scores = [];

  emotional.forEach(function(item) {
    for(var prop in item) {
      if(prop === 'tone_name') {
        labels.push(item[prop]);
      }
      if(prop === 'score') {
        scores.push(item[prop] * 100);
      }
    }
  });

  writing.forEach(function(item) {
    for(var prop in item) {
      if(prop === 'tone_name') {
        labels.push(item[prop]);
      }
      if(prop === 'score') {
        scores.push(item[prop] * 100);
      }
    }
  });

  social.forEach(function(item) {
    for(var prop in item) {
      if(prop === 'tone_name') {
        labels.push(item[prop]);
      }
      if(prop === 'score') {
        scores.push(item[prop] * 100);
      }
    }
  });

  var barData = {
    labels: labels,
    datasets: [
      {
        label: 'Tone Data',
        fillColor: ['rgba(102,0,204,0.4)', 'rgba(255,0,0,0.4)', 'rgba(255,153,51,0.4)'],
        strokeColor: 'rgba(220,220,220,1)',
        highlightFill: '#fff',
        highlightStroke: 'rgba(220,220,220,1)',
        data: scores,
        customTooltip: true,
        tooltipTemplate: '<%= value %>'
      }
    ]
  };

  return barData;
};
