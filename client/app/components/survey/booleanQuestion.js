var React = require('react');
var Tile = require('../tile');
var styleable = require('react-styleable').default;
var css = require('../../styles/tile.css');

function BooleanQuestion (props) {
  return (
    <Tile key={props.key}>
      <p>{props.text}</p>
      <ul className={props.css.radioList}>
        <li><input type="radio" name='boolean' value="yes" tabIndex={props.tabIndex} onChange={props.handleChange} /> Yes</li>
        <li><input type="radio" name='boolean' value="no" onChange={props.handleChange} /> No</li>
      </ul>
      {props.children}
    </Tile>
  )
}

module.exports = styleable(css)(BooleanQuestion);
