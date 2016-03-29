var expect = require('chai').expect;
var actions = require('../app/actions/authActions');

describe('sign up', function(){
  it('should have a function signUpSubmit that returns an action type \
  SIGN_UP_SUBMIT', function(){
    var expectedAction = {type: 'SIGN_UP_SUBMIT', signupForm};
    expect(actions.signUpSubmit).to.be.a.function;
    expect(actions.signUpSubmit()).to.equal(expectedAction);
  });
  it('should have a function signUpSucess that returns an action type \
  SIGN_UP_SUCCESS', function(){
    var expectedAction = {type: 'SIGN_UP_SUCCESS', signupForm};
    expect(actions.signUpSuccess).to.be.a.function;
    expect(actions.signUpSuccess()).to.equal(expectedAction);
  });
  it('should have a function signUpFailure that returns an action type \
  SIGN_UP_FAILURE', function(){
    var expectedAction = {type: 'SIGN_UP_FAILURE', signupForm};
    expect(actions.signUpFailure).to.be.a.function;
    expect(actions.signUpFailure()).to.equal(expectedAction);
  });
});

describe('sign in', function(){
  it('should have a function signInSubmit that returns an action type\
  SIGN_IN_SUBMIT', function(){
    var expectedAction = {type: 'SIGN_IN_SUBMIT', signinForm};
    expect(actions.signInSubmit).to.be.a.function;
    expect(actions.signInSubmit()).to.equal(expectedAction);
  });
  it('should have a function signUpSucess that returns an action type \
  SIGN_IN_SUCCESS', function(){
    var expectedAction = {type: 'SIGN_IN_SUCCESS', signinForm};
    expect(actions.signInSuccess).to.be.a.function;
    expect(actions.signInSuccess()).to.equal(expectedAction);
  });
  it('should have a function signUpFailure that returns an action type \
  SIGN_IN_FAILURE', function(){
    var expectedAction = {type: 'SIGN_IN_FAILURE', signinForm};
    expect(actions.signInFailure).to.be.a.function;
    expect(actions.signInFailure()).to.equal(expectedAction);
  });
});
