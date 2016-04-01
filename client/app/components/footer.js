var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../styles/main.css');

function Footer(props) {
  return (
    <div className={props.css.footer}><img className={props.css.footerLogo} src={require('../../assets/oMdo.png')} width='90px' height='35px' alt={'oMdo'} /><div className={props.css.year}>2016</div></div>
  )
}

module.exports = styleable(css)(Footer);
