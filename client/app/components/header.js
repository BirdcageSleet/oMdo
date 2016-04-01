var React = require('react');
var Link = require('react-router').Link;
var styleable = require('react-styleable').default
var css = require('../styles/navbar.css');

function Header (props) {
  return (
    <div className={props.className || props.css.root}>
      <ul className={props.css.ul}>
        <li className={props.css.imageHolder}>
          <Link to='/'>
            <img className={props.css.headerLogo} src={require('../../assets/oMdo.png')} width='150px' height='64px' alt={'oMdo'} />
          </Link>
        </li>
        <li>{props.children}</li>
      </ul>
    </div>
  )
};

module.exports = styleable(css)(Header);
