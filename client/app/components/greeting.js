var React = require('react');
var Tile = require('./tile');

function Profile(props) {
  return (
    <Tile>
        <h1>{'Hello ' + props.username}</h1>

        {
          props.location === '/'

          ?

          <div>
          <p>How are you?</p>
          <p>We hope you're having a great day, but if you're not
          (or just aren't sure), we invite you to take a few moments
          to reflect and share your feelings in a survey.  We'll
          compile and analyze your results to provide a picture of your
          mood from up to the last 7 days.</p>
          <p>Want to know more?</p>
          <p>If it looks like your week took a turn for the worse on Tuesday,
          just head to your diary to view that day's survey responses.</p>
          <p>Even if you're feeling great, your survey results can help highlight
           the trends and habits that will keep you feeling that way.</p>
          <p>Feel like your tweets aren't connecting?  Let us analyze your Twitter
          feed.  We'll pull your 25 most recent tweets and help you decide if
          you're saying more (or less) than you think.</p>
          <p>Let oMdo start helping you get your moods in order today!</p>
          </div>

          :

          props.children

        }
    </Tile>
  );
}

module.exports = Profile;
