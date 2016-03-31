var React = require('react');
var styleable = require('react-styleable').default
var css = require('../styles/tile.css');

function Tile(props) {
  var className = !props ? undefined : props.className || props.css.root
  var key = !props ? undefined : props.key || undefined;
  return (
    <div key={key} className={className}>
      {props.children}
    </div>
  )
}

module.exports = styleable(css)(Tile);
