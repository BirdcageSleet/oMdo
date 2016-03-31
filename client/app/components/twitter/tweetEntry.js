var React = require('react');
var Tile = require('../tile');

function TweetEntry(props) {
  return (
    <Tile>
      <li key={props.key} >
        {props.data}
      </li>
    </Tile>
  );
}

module.exports = TweetEntry;
