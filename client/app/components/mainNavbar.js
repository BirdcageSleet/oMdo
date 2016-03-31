var React = require('react');
var Link = require('react-router').Link;
var Header = require('./header');
var styleable = require('react-styleable').default
var css = require('../styles/navbar.css');

function Navbar(props) {
  return !props.isLoggedIn
    ? (
      <div>
        {/*<Link className={props.css.navItem} to='/signin' tabIndex='100'> Sign In </Link>
                <Link className={props.css.navItem} to='/signup' tabIndex='110'> Sign Up </Link>*/}
        <Link className={props.css.navItem} to='/about' tabIndex='120'> What is oMdo? </Link>
      </div>
    )
    : (
      <div className={props.className}>
        {props.children}
        <Link className={props.css.navItem} to='/signin' tabIndex='130' onClick={props.onSignOut}> Log Out </Link>
        <Link className={props.css.navItem} to='/summary' tabIndex='120'> 7-Day Summary </Link>
        <Link className={props.css.navItem} to='/journal' tabIndex='111'> Journal </Link>
        <Link className={props.css.navItem} to='/meditations' tabIndex='110'> Daily Survey </Link>
        <Link className={props.css.navItem} to='/twit' tabIndex='100'> Analyze Your Twitter Feed </Link>
      </div>
    )
}

module.exports = styleable(css)(Navbar);
