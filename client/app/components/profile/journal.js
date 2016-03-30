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
            onRevealDiary={props.onRevealDiary}
            entryIds={props.entryIds}
            entryId={props.entryIds[entry._id]}
          />
        )
      })}
    </div>
  );
}

module.exports = styleable(css)(Journal);
