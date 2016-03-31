var React = require('react');
var Tile = require('./tile');
var styleable = require('react-styleable').default;
var css = require('../styles/home.css');

function Loading (props) {
  return (
    <div className={props.css.root}>
      <Tile>
        <h1>Let Mike dream...  Your feelings will be here shortly...</h1>
      </Tile>
    </div>
  )
};

module.exports = styleable(css)(Loading);
