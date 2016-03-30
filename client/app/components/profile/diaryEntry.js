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

    <div className={props.css.root}>
      <h3> Here are the results from your last seven surveys.</h3>
      <p>    In this representation, you are striving to have the entirety of the graph filled in. This represents having a great mood, sleeping well, having low anxiety and high energy, and feeling positive. <br />
          Take a few moments to review the graph and note any days that cover a smaller area on the graph. <br />
          For those days, review the results from you survey. Perhaps your job was particularly stressful or a major event occurred.
      </p>
      <div className={props.css.radarChart}>
        <Radar
          data={format(props.data)}
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
        </div>
    </div>
  )
  }
};

module.exports = styleable(css)(DiaryEntry);
