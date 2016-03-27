var React = require('react');
var Frame = require('./frame');
var styleable = require('react-styleable').default;
var css = require('../styles/main.css');

function GeneralNav (props) {
  return (
    <Frame className={props.css.nav}>
      {props.children.map(function(child, i) {
        return (
          <div>
            <button
              key={i*10}
              className={props.css.navItem}
              onClick={props.handlers[i]}
              >
              {child.props.text || 'Checkout item ' + i}
            </button>
          </div>
        )
      })}
    </Frame>
  )
};

module.exports = styleable(css)(GeneralNav);
