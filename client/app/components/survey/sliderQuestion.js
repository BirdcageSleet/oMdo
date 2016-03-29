var React = require('react');
var Tile = require('../tile');

function SliderQuestion (props) {
  return (
    <Tile key={props.key}>
      <p>{props.text} <br/><em><small>(On a scale from {props.minText} to {props.maxText})</small></em></p>
      {props.minText}<input type='range' min='1' max='5' step='1' tabIndex={props.tabIndex} onChange={props.handleChange} />{props.maxText}
      <br />
    </Tile>
  )
}

module.exports = SliderQuestion;
