var React = require('react');
var Frame = require('./frame');
var styleable = require('react-styleable').default;
var css = require('../styles/main.css');

//Don't touch this it's a subcomponent of the allPurposeContainer
function GeneralNav (props) {
  return (
    <Frame className={props.css.nav}>
      {props.children.map(function(child, i) {
        return (
          <div key={(i + 1)*10}>
            className={props.css.navItem}
            onClick={props.handlers[i]}
            
            {child.props.text || 'Checkout item ' + i}
          </div>
        )
      })}
    </Frame>
  )
};

module.exports = styleable(css)(GeneralNav);
