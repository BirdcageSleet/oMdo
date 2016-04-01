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
      <div className={props.css.footer}><img className={props.css.footerLogo} src={require('../../assets/oMdo.png')} width='90px' height='35px' alt={'oMdo'} /><div className={props.css.year}>2016</div></div>
    </div>
  )
}

module.exports = styleable(css)(Main);
