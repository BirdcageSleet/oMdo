var React = require('react');
var Tile = require('../tile');

function Profile(props) {
  return (
    <Tile>
        <h1>{'Hello' + props.username}</h1>
        {props.children}
    </Tile>
  );
}

module.exports = Profile;
