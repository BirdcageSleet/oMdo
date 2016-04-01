var React = require('react');
var Header = require('./header');
var Navbar = require('../containers/navbarContainer');
var Footer = require('./footer');

function Main (props){
  return(
    <div>
      <Header>
        <Navbar />
      </Header>
      {props.children}
      <Footer />
    </div>
  )
}

module.exports = Main;
