var React = require('react');
var TeamMember = require('./teamMember');
var styleable = require('react-styleable').default;
var css = require('../../styles/about.css');

function Team (props) {
  return (
    <div className={props.css.team}>
      <h2 className={props.css.headers}>Meet Our Team</h2>
      <table className={props.css.list}>
        <tbody>
          <tr>
            <TeamMember name={'Sanford Bradshaw'} title={'Full-Stack Engineer'} imgFilename={require('../../../assets/sbradshaw.jpg')} />
            <TeamMember name={'Liz Sciortino'} title={'Full-Stack Engineer'} imgFilename={require('../../../assets/esciortino.jpg')} />
            <TeamMember name={'Chris Patton'} title={'Full-Stack Engineer'} imgFilename={require('../../../assets/cpatton.jpg')} />
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <TeamMember name={'Mike Frazier'} title={'Product Owner'} imgFilename={require('../../../assets/mfrazier.jpg')} />
            <TeamMember name={'John Soo'} title={'Scrum Master'} imgFilename={require('../../../assets/jsoo.jpg')} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

module.exports = styleable(css)(Team);
