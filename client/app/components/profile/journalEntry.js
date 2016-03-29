var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../../styles/tile.css');
var Tile = require('../tile');
var Form = require('../form');

function dateFormat(date) {
  var output = '';
  output += date.getMonth() + 1 + '/';
  output += date.getDate() + '/';
  output += date.getFullYear();
  return output;
}

function JournalEntry(props) {
  console.log('journal entry props ', props);
  return (
    <Tile>
      <h2>{props.entry.createdOn.slice(0,10)}</h2>
        <ul className={props.css.journalList}>
          <li>
            <h3>How were you feeling?</h3>
            <p>You gave yourself a rating of {props.entry.feeling} out of 5.</p>
          </li>
          <li>
            <h3>What was your anxiety?</h3>
            <p>You said your anxiety level was a {props.entry.anxiety} out of 5.</p>
          </li>
          <li>
            <h3>What was your energy level?</h3>
            <p>You said your energy level was a {props.entry.energy} out of 5.</p>
          </li>
          <li>
            <h3>How did you sleep?</h3>
            <p>{props.entry.sleep}</p>
          </li>
          <li>
            <h3>This is what you said about your sleep.</h3>
            <p>{props.entry.sleepElaborate}</p>
            <Form onSubmit={props.onSubmitNote} text='Add Note'>
              <input
                type='text'
                onChange={props.onSleepNote}
              />
            </Form>
          </li>
          <li>
            <h3>How was your mood?</h3>
            <p>You described your mood as {props.entry.mood}.</p>
          </li>
          <li>
            <h3>Here's what you said about your mood.</h3>
            <p>{props.entry.moodElaborate}</p>
            <Form onSubmit={props.onSubmitNote} text='Add Note'>
              <input
                type='text'
                onChange={props.onMoodNote}
              />
            </Form>
          </li>
          <li>
            <h3>Had there been any major events since your last check-in?</h3>
            <p>You said {props.entry.majorEvent ? 'Yes' : 'No'}</p>
          </li>
          <li>
            <h3>Here's what you said about this event.</h3>
            <p>{props.entry.eventElaborate}</p>
            <Form onSubmit={props.onSubmitNote} text='Add Note'>
              <input
                type='text'
                onChange={props.onEventNote}
              />
            </Form>
          </li>
        </ul>
    </Tile>
  )
}

module.exports = styleable(css)(JournalEntry);
