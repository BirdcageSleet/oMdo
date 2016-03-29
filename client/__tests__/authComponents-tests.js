jest.dontMock('../app/components/auth.js');

var TestUtils = require('react-addons-test-utils');
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('react').PropTypes;
describe('The auth form module', function() {
  describe('display the form info', function() {
    it('should display the username and password', function() {
      var Auth = require('../app/components/auth.js');
      var AuthContainer = require('../app/containers/authContainer.js');

      var mockOnSubmit = function() {};

      var mockOnUpdateUserName = function() {};

      var mockOnUpdatePassword = function() {};

      var form = {
        username : "Chris",
        password : "simple",
        text: 'signin'
      }

      var auth = TestUtils.renderIntoDocument(
          <div>
            <Auth username={form.username}
            password={form.password} text={form.text}
            onSubmit={mockOnSubmit}
            onUpdateUsername={mockOnUpdateUserName}
            onUpdatePassword={mockOnUpdatePassword}/>
          </div>
        );


     var authNode = ReactDOM.findDOMNode(auth).children[0];
     expect(TestUtils.isDOMComponent(authNode)).toBeTruthy();
     expect(authNode.children[0].children[0].value).toBe('Chris');
     expect(authNode.children[0].children[1].value).toBe('simple');
     expect(authNode.children[0].children[2].textContent).toBe('signin');
    })
  })
})
