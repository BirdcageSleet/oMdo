var React = require('react');
var Radar = require('react-chartjs').Radar;
var format = require('../utilities/formatEntryRadarData');
var styleable = require('react-styleable').default;
var css = require('../../styles/tile.css');

function DiaryEntry (props) {
    if(props.data.length === 0) {
      return (<div><h2>You need to submit a survey</h2></div>)
    } else {
  return (

    <li className={props.css.root}>
      <Radar
        data={format(props.data)}
        redraw
        options={{
          scaleOverride: true,
          scaleSteps: 5,
          scaleStepWidth: 10,
          scaleStartValue: 0,
          scaleShowLabels: true,
          multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
        }}
        width='500'
        height='500' />
    </li>
  )
  }
};

module.exports = styleable(css)(DiaryEntry);
