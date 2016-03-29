var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../../styles/about.css');

function Project (props) {
  return (
    <div className={props.css.root}>
      <h1 className={props.css.headers}>About oMdo</h1>
      <p className={props.css.text}>    Mood is fleeting and inscrutible. oMdo is all about helping you get to know yourself.   Discover the causes of your ups and downs. Gain insight into your habits and the role they play in how you feel.
        By setting aside a moment each day to engage in mindful self-reflection, you can track trends in your mood. oMdo allows you to spot triggers of your mood changes and develop methods to confront them appropriately. </p>
      {props.children}
      <h2 className={props.css.headers}>Privacy</h2>
      <p className={props.css.text}>oMdo cares about your privacy. The information you choose to share with us will not be distributed, shared or sold.</p>
      <h2 className={props.css.headers}>Disclaimer</h2>
      <p className={props.css.text}>oMdo is not designed to be used as a diagnostic tool. If you feel you need professional assistance, please visit the American Psychological Association to find a psychologist in your area.</p>
    </div>
  )
}

module.exports = styleable(css)(Project);
