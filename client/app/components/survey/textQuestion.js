var React = require('react');
var Tile = require('../tile')
var styleable = require('react-styleable').default;
var css = require('../../styles/tile.css');

function TextQuestion (props) {
  return (
    <Tile className={props.css.textQuestion}>
      <p>Care to elaborate on your {props.category}?</p>
      <textarea rows='4' cols='50' tabIndex={props.tabIndex} onChange={props.handleChange} />
    </Tile>
  )
};

module.exports = styleable(css)(TextQuestion);
