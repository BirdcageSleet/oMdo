var React = require('react');
var Link = require('react-router').Link;
var Header = require('./header');
var styleable = require('react-styleable').default
var css = require('../styles/navbar.css');

function Navbar(props) {
  console.log('HIIZME', props)
  return !props.isLoggedIn
    ? (
      <div>
        {/*<Link className={props.css.navItem} to='/signin' tabIndex='100'> Sign In </Link>
                <Link className={props.css.navItem} to='/signup' tabIndex='110'> Sign Up </Link>*/}
        <Link className={props.css.navItem} to='/about' tabIndex='120'> What is oMdo? </Link>
      </div>
    )
    : (
      <div className={props.css.navButtonContainer}>
      <div className={props.css.linkHolder}>
        {props.children}
        <Link className={props.css.summary} to='/summary' tabIndex='120'><div className={props.css.navItemSummary}> 7-Day Summary </div></Link>
        <Link className={props.css.journal} to='/journal' tabIndex='111'><div className={props.css.navItemJournal}>  Journal </div></Link>
        <Link className={props.css.meditations} to='/meditations' tabIndex='110'><div className={props.css.navItemMeditations}>  Daily Survey </div></Link>
        <Link className={props.css.twit} to='/twit' tabIndex='100'><div className={props.css.navItemTwit}>  Analyze Your Twitter Feed </div></Link>
      </div>
      <Link className={props.css.logout} to='/signin' tabIndex='130' onClick={props.onSignOut}> Log Out </Link>
      </div>
    )
}

module.exports = styleable(css)(Navbar);
