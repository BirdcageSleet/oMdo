var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../../styles/about.css');

function TeamMember (props) {
  return (
    <td className={props.css.person}>
      <img src={props.imgFilename} width='135px' />
      <div className={props.css.name}>
        <h4>{props.name}</h4>
        <div className={props.css.title}>{props.title}</div>
      </div>
    </td>
  )
}

module.exports = styleable(css)(TeamMember);
