var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../../styles/tile.css');
var Tile = require('../tile');
var Form = require('../form');

function JournalEntry(props) {
  return (
    <Tile>
      <h2>{new Date(props.entry.createdOn).toLocaleString()}</h2>
        <ul className={props.css.journalList}>
          <li>
            <h3>How were you feeling?</h3>
            <p>On a scale of 1 to 5, where 1 is depressed and 5 is overjoyed, 
            your feeling rating was {props.entry.feeling}.</p>
          </li>
          <li>
            <h3>What was your anxiety level?</h3>
            <p>On a scale of 1 to 5, where 1 is panicky and 5 is not at all anxious, you rated 
            your anxiety level a {props.entry.anxiety}.</p>
          </li>
          <li>
            <h3>What was your energy level?</h3>
            <p>On a scale of 1 to 5, where 1 is falling asleep and 5 is alert and awake, you rated your
             energy level a {props.entry.energy}.</p>
          </li>
          <li>
            <h3>How did you sleep?</h3>
            <p>
              {props.entry.sleep === 1 ? 'Insomnia' : ''}
              {props.entry.sleep === 2 ? 'Tossed and turned' : ''}
              {props.entry.sleep === 3 ? 'Normally' : ''}
              {props.entry.sleep === 4 ? 'Pretty well' : ''}
              {props.entry.sleep === 5 ? 'Very restful' : ''}
            </p>
          </li>
          <li>
            <h3>This is what you said about your sleep.</h3>
            <p>{props.entry.sleepElaborate}</p>
          </li>
          <li>
            <h3>How was your mood?</h3>
            <p>
              {props.entry.mood === 1 ? 'Sad' : ''}
              {props.entry.mood === 2 ? 'Aggravated' : ''}
              {props.entry.mood === 3 ? 'Normal' : ''}
              {props.entry.mood === 4 ? 'Agreeable' : ''}
              {props.entry.mood === 5 ? 'High spirits' : ''}
              </p>
          </li>
          <li>
            <h3>Here's what you said about your mood.</h3>
            <p>{props.entry.moodElaborate}</p>
          </li>
          <li>
            <h3>Had there been any major events since your last check-in?</h3>
            <p>{props.entry.majorEvent ? 'Yes' : 'No'}</p>
          </li>
          <li>
            <h3>Here's what you said about this event.</h3>
            <p>{props.entry.eventElaborate}</p>
          </li>
        </ul>
    </Tile>
  )
}

module.exports = styleable(css)(JournalEntry);
