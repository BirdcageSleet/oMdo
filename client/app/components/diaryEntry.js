var React = require('react');
var Radar = require('react-chartjs').Radar;
var format = require('../utilities/formatEntryRadarData');
var styleable = require('react-styleable').default;
var css = require('../styles/question.css');

function DiaryEntry (props) {
  console.log(props)
  return (
    <li className={props.css.root}>
      <Radar
        data={format(props.data)}
        options={{
          scaleOverride: true,
          scaleSteps: 5,
          scaleStepWidth: 10,
          scaleStartValue: 0,
        }}
        width='300'
        height='300' />
    </li>
  )
};

module.exports = styleable(css)(DiaryEntry);
