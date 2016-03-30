var React = require('react')
var styleable = require('react-styleable').default;
var css = require('../styles/main.css');
var Link = require('react-router').Link;

function Form (props) {
  return (
    <div className={props.css.form}>
      <div className={props.formClassName || ''}>
        <form>
          {props.children}
          <div className={props.css.submitForm || ''} onClick={props.onSubmit}>{props.text}</div>
        </form>
        {
            props.pathname === '/signin' ?
                <div>
                    <h3 className={props.authReroute}>New User? <Link to='/signup' className={props.authLink}>Sign Up Here</Link></h3>
                </div>
            : null
        }
        {
            props.pathname === '/signup' ?
                <div>
                    <h3 className={props.authReroute}>Already signed up? <Link to='/signin' className={props.authLink}>Sign In Here</Link></h3>
                </div>
            : null
        }
      </div>
    </div>
  )
};

module.exports = styleable(css)(Form);
