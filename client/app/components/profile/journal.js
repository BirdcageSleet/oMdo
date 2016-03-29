var React = require('react');
var JournalEntry = require('./journalEntry');
var styleable = require('react-styleable').default;
var css = require('../../styles/tile.css');

function Journal(props) {
  return(
    <div>
      {props.entries.map(function(entry, i) {
        return (
          <JournalEntry
            entry={entry}
            key={i}
            onSubmitNote={props.onSubmitNote}
            onSleepNote={props.onSleepNote}
            onMoodNote={props.onMoodNote}
            onEventNote={props.onEventNote}
          />
        )
      })}
    </div>
  );
}

module.exports = styleable(css)(Journal);
