var React = require('react');
var Filter = require('./filteredComponents');
var styleable = require('react-styleable').default;
var css = require('../styles/main.css');

function ContentBox (props) {
  return (
    <Filter
      className={props.css.contentBox}
      filter={function(child) {
        return props.displayed === child.key;
      }}>
      {props.children}
    </Filter>
  )
};

module.exports = styleable(css)(ContentBox);
