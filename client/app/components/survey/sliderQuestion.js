var React = require('react');
var Tile = require('../tile');
var styleable = require('react-styleable').default;
var css = require('../../styles/survey.css');

function SliderQuestion (props) {
  return (
    <Tile key={props.key}>
      <p className={props.css.textBox}>{props.text} <br/><em><small>(On a scale from {props.minText} to {props.maxText})</small></em></p>
      <div className={props.css.slider}>{props.minText}<input type='range' min='1' max='5' step='1' tabIndex={props.tabIndex} onChange={props.handleChange} />{props.maxText}</div>
      <br />
    </Tile>
  )
}

module.exports = styleable(css)(SliderQuestion);
