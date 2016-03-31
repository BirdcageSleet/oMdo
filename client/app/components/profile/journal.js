var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../../styles/tile.css');

function Journal(props) {
  return(
    <div>
      {props.entries}
    </div>
  );
}

module.exports = styleable(css)(Journal);
