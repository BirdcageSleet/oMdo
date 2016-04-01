var React = require('react');
var JournalEntry = require('./journalEntry');
var styleable = require('react-styleable').default;
var css = require('../../styles/tile.css');
var Tile = require('../tile');

function Journal(props) {
  console.log('journal children ', this.props);
  return(
    <div>
      {props.entries.reverse().map(function(entry, i) {
        return (
          <JournalEntry
            entry={entry}
            key={i}
            onRevealDiary={props.onRevealDiary}
            hideEntry={props.hideEntry}
          />
        )
      })}
    </div>
  );
};

module.exports = styleable(css)(Journal);
