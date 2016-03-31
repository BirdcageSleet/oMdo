var React = require('react');
var Link = require('react-router').Link;
var styleable = require('react-styleable').default
var css = require('../styles/navbar.css');

function Header (props) {
  return (
    <div className={props.className || props.css.root}>
      <Link to='/'>
        <img src={require('../../assets/oMdo.png')} width='150px' height='64px' alt={'oMdo'} />
      </Link>
      <ul className={props.css.ul}>
        {props.children}
      </ul>
    </div>
  )
};

module.exports = styleable(css)(Header);
