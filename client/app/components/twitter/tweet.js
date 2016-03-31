var React = require('react');
var BarChart = require('react-chartjs').Bar;
var Tile = require('../tile');
var format = require('../utilities/formatTwitterData');
var styleable = require('react-styleable').default;
var css = require('../../styles/twitterCharts.css');

function Tweet (props) {
  if(props.tones.length) {
    return (
    <div className={props.css.chartContainer}>
      <Tile className={props.css.chart}>
        <h2>What Are Your Tweets Really Saying?</h2>
          <BarChart data={format(props.tones)} options={props.chartOptions} width='400' height='290' />
      </Tile>
      <Tile>
        <h3 className={props.css.sectionHeader} onClick={props.onEmotionDisplay}>Emotional Tone</h3>
          {
            props.emotionDisplay ?

            <ul className={props.css.emotional}>
            <li className={props.css.header}>Emotional tone is inferred from different types of emotions and feelings expressed in your writing.</li>
            <li>
              <h5>Your Anger Score is {Math.round(props.emotional[0].score*10000)/100}%</h5>
              <ul>
                <li className={props.css.category}>Anger is an emotion characterized by antagonism toward someone or something you feel
                has deliberately done you wrong.</li>
                <li className={props.css.percentage}>An anger score below 50% indicates your tone is less likely to be perceived as angry.</li>
                <li className={props.css.percentage}>An anger score above 75% indicates your tone is highly likely to be perceived as angry.</li>
              </ul>
            </li>
            <li>
              <h5>Your Disgust Score is {Math.round(props.emotional[1].score*10000)/100}%</h5>
                <ul>
                  <li className={props.css.category}>Disgust is a strong negative feeling of aversion or disapproval.</li>
                  <li className={props.css.percentage}>A disgust score below 50% indicates your tone is less likely to be perceived as disgusted.</li>
                  <li className={props.css.percentage}>A disgust score above 75% indicates your tone is highly likely to be perceived as disgusted.</li>
                </ul>
            </li>
            <li>
              <h5>Your Fear Score is {Math.round(props.emotional[2].score*10000)/100}%</h5>
                <ul>
                  <li className={props.css.category}>Fear is an emotion caused by the belief that someone or something is dangerous,
                  likely to cause pain, or a threat.</li>
                  <li className={props.css.percentage}>A fear score below 50% indicates your tone is less likely to be perceived as scared.</li>
                  <li className={props.css.percentage}>A fear score above 75% indicates your tone is highly likely to be perceived as scared.</li>
                </ul>
            </li>
            <li>
              <h5>Your Joy Score is {Math.round(props.emotional[3].score*10000)/100}%</h5>
                <ul>
                  <li className={props.css.category}>Joy, or happiness, is an emotion evoked by well-being, success, or the prospect of
                  possessing what one desires.</li>
                  <li className={props.css.percentage}>A joy score below 50% indicates your tone is less likely to be perceived as joyful.</li>
                  <li className={props.css.percentage}>A joy score above 75% indicates your tone is highly likely to be perceived as joyful.</li>
                </ul>
            </li>
            <li>
              <h5>Your Sadness Score is {Math.round(props.emotional[4].score*10000)/100}%</h5>
                <ul>
                  <li className={props.css.category}>Sadness is an emotion associated with or characterized by feelings of loss, despair,
                  grief, helplessness, disappointment, and sorrow.</li>
                  <li className={props.css.percentage}>A sadness score below 50% indicates your tone is less likely to be perceived as sad.</li>
                  <li className={props.css.percentage}>A sadness score above 75% indicates your tone is highly likely to be perceived as sad.</li>
                </ul>
            </li>
          </ul>
          :
          null
          }

      </Tile>
      <Tile>
        <h3 className={props.css.sectionHeader} onClick={props.onLanguageDisplay}>Language Tone</h3>
          {
            props.languageDisplay ?

            <ul className={props.css.language}>
              <li className={props.css.header}>Language tone describes how your writing style is perceived.</li>
              <li>
                <h5>Your Analytic score is {Math.round(props.writing[0].score*10000)/100}%</h5>
                  <ul>
                    <li className={props.css.category}>This score describes the reasoning and analytical attitude conveyed in your
                    writing.</li>
                    <li className={props.css.percentage}>An analytic score below 25% indicates your writing tone is more likely to
                    be perceived as reckless, unmethodical, laid back, or spontaneous.</li>
                    <li className={props.css.percentage}>An analytic score above 75% indicates your writing tone is more likely to
                    be perceived as intellectual, rational, systematic, emotionless, or impersonal.</li>
                  </ul>
              </li>
              <li>
                <h5>Your Confidence Score is {Math.round(props.writing[1].score*10000)/100}%</h5>
                  <ul>
                    <li className={props.css.category}>This score describes the degree of certainty conveyed in your writing.</li>
                    <li className={props.css.percentage}>A confidence score below 25% indicates your writing tone is more likely to be
                    perceived as nervous, humble, unassertive, or self-critical.</li>
                    <li className={props.css.percentage}>A confidence score above 75% indicates your writing is more likely to be
                    perceived as assured, collected, hopeful, or egotistical.</li>
                  </ul>
              </li>
              <li>
                <h5>Your Tentativeness Score is {Math.round(props.writing[2].score*10000)/100}%</h5>
                  <ul>
                    <li className={props.css.category}>This score describes the degree of inhibition conveyed in your writing.</li>
                    <li className={props.css.percentage}>A tentativeness score below 25% indicates your writing tone is more likely
                    to be perceived as confident, independent, or sure.</li>
                    <li className={props.css.percentage}>A tentativeness score above 75% indicates your writing tone is more likely
                    to be perceived as questionable, doubtful, limited, or debatable.</li>
                  </ul>
              </li>
            </ul>

          :
          null
          }
      </Tile>
      <Tile>
        <h3 className={props.css.sectionHeader} onClick={props.onSocialDisplay}>Social Tone</h3>
        {
            props.socialDisplay ?

            <ul className={props.css.social}>
              <li className={props.css.header}>Social tone describes the social tendencies in your writing.</li>
              <li>
                <h5>Your Openness Score is {Math.round(props.social[0].score*10000)/100}%</h5>
                  <ul>
                    <li className={props.css.category}>This score describes the extent to which your writing conveys an openness
                    to experience a variety of activities.</li>
                    <li className={props.css.percentage}>An openness score below 25% indicates your tone is more likely to be perceived as
                    no-nonsense, straightforward, blunt, or preferring tradition and the obvious over
                    complexity, ambiguity, and subtlety.</li>
                    <li className={props.css.percentage}>An openness score above 75% indicates your tone is more likely to be perceived as
                    intellectual, curious, emotionally aware, imaginative, willing to try new things,
                    appreciative of beauty, or open to change.</li>
                  </ul>
              </li>
              <li>
                <h5>Your Conscientiousness Score is {Math.round(props.social[1].score*10000)/100}%</h5>
                  <ul>
                    <li className={props.css.category}>This score describes the tendency conveyed in your writing to act in an organized
                    or thoughtful way.</li>
                    <li className={props.css.percentage}>A conscientiousness score below 25% indicates your tone is more likely to be
                    perceived as spontaneous, laid back, reckless, unmethodical, remiss, or disorganized.</li>
                    <li className={props.css.percentage}>A conscientiousness score above 75% indicates your tone is more likely to be
                    perceived as disciplined, dutiful, achievement-oriented, confident, driven, or organized.</li>
                  </ul>
              </li>
              <li>
                <h5>Your Extraversion Score is {Math.round(props.social[2].score*10000)/100}%</h5>
                  <ul>
                    <li className={props.css.category}>This score describes the tendency conveyed in your writing to seek stimulation in
                    the company of others.</li>
                    <li className={props.css.percentage}>An extraversion score below 25% indicates your tone is more likely to be perceived as
                    independent, timid, introverted, restrained, boring, or dreary.</li>
                    <li className={props.css.percentage}>An extraversion score above 75% indicates your tone is more likely to be perceived as
                    engaging, seeking attention, needy, assertive, outgoing, sociable, cheerful, excitement-
                    seeking, or busy.</li>
                  </ul>
              </li>
              <li>
                <h5>Your Agreeableness Score is {Math.round(props.social[3].score*10000)/100}%</h5>
                  <ul>
                    <li className={props.css.category}>This score describes the tendency conveyed in your writing to be compassionate and
                    cooperative towards others.</li>
                    <li className={props.css.percentage}>An agreeableness score below 25% indicates your tone is more likely to be perceived as
                    selfish, uncaring, uncooperative, self-interested, confrontational, skeptical, or arrogant.</li>
                    <li className={props.css.percentage}>An agreeableness score above 75% indicates your tone is more likely to be perceived as
                    caring, sympathetic, cooperative, compromising, trustworthy, or humble.</li>
                  </ul>
              </li>
              <li>
                <h5>Your Emotional Range Score is {Math.round(props.social[4].score*10000)/100}%</h5>
                  <ul>
                    <li className={props.css.category}>This score describes the extent to which your writing conveys sensitivity to your
                    environment.</li>
                    <li className={props.css.percentage}>An emotional range score below 25% indicates your tone is more likely to be perceived as
                    calm, bland, content, relaxed, unconcerned, or careful.</li>
                    <li className={props.css.percentage}>An emotional range score above 75% indicates your tone is more likely to be perceived as
                    concerned, frustrated, angry, passionate, upset, stressed, insecure, or impulsive.</li>
                  </ul>
              </li>
            </ul>

          :
          null
          }
      </Tile>

    </div>
    )
  } else {
    return (
      <Tile>Please enter your Twitter handle above and press <em>Submit</em>.</Tile>
    )
  }
}

module.exports = styleable(css)(Tweet);
