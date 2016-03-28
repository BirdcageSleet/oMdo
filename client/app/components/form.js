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
          <div className={props.buttonClassName || ''} onClick={props.onSubmit}>{props.text}</div>
        </form>
        {
            props.pathname === '/signin' ?
                <div>
                    New User? <Link to='/signup'>Sign Up Here</Link>
                </div>
            : null
        }
        {
            props.pathname === '/signup' ?
                <div>
                    Already signed up? <Link to='/signin'>Sign In Here</Link>
                </div>
            : null
        }
      </div>
    </div>
  )
};

module.exports = styleable(css)(Form);
