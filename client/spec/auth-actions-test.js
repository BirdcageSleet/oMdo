var expect = require('chai').expect;
var authActions = require('../app/actions/authActions');
var actions = require('../app/actions/actions');

describe('Auth actions', function(){
  it('should have a function authSubmit that returns an action type \
  AUTH_SUBMIT', function(){
    var expectedAction = {type: actions.AUTH_SUBMIT};
    expect(authActions.authSubmit).to.be.a.function;
    expect(authActions.authSubmit()).to.deep.equal(expectedAction);
  });
  it('should have a function authSuccess that returns an action type \
  AUTH_SUCCESS', function(){
    var expectedAction = {type: actions.AUTH_SUCCESS};
    expect(authActions.authSuccess).to.be.a.function;
    expect(authActions.authSuccess()).to.deep.equal(expectedAction);
  });
  it('should have a function authFailure that returns an action type \
  AUTH_FAILURE', function(){
    var expectedAction = {type: actions.AUTH_FAILURE};
    expect(authActions.authFailure).to.be.a.function;
    expect(authActions.authFailure()).to.deep.equal(expectedAction);
  });
});
