var React = require('react');
var Header = require('./header');
var Navbar = require('../containers/navbarContainer');
var styleable = require('react-styleable').default;
var css = require('../styles/main.css');

function Main (props){
  return(
    <div>
      <Header>
        <Navbar />
      </Header>
      {props.children}
    </div>
  )
}

module.exports = styleable(css)(Main);
