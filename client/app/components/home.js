var React = require('react');
var Greeting = require('./greeting');
var styleable = require('react-styleable').default;
var css = require('../styles/home.css');

function Home (props) {
  return (
    <div className={props.css.root}>
      <Greeting username={props.username} />
    </div>
  )
};

module.exports = styleable(css)(Home);
