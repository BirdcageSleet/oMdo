var React = require('react');

function Filter (props) {
  return (
    <div>
      {Array.isArray(props.children)
      ? props.children.filter(function(child) {
          return props.filter(child);
        })
      : props.children}
    </div>
  )
};

module.exports = Filter;
