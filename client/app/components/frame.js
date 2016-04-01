var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../styles/main.css');

function Frame (props) {
  return (
    <div key={props.key} className='frame'>
      {props.children}
    </div>
  )
};

module.exports = styleable(css)(Frame);
