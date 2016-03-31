var React = require('react');
var JournalEntry = require('./journalEntry');
var styleable = require('react-styleable').default;
var css = require('../../styles/tile.css');

function Journal(props) {
  return(
    <div>
      {props.entries.reverse().map(function(entry, i) {
        return (
          <JournalEntry
            entry={entry}
            key={i}
          />
        )
      })}
    </div>
  );
}

module.exports = styleable(css)(Journal);
