jest.unmock('../app/components/home.js');

describe('Home', function(){
  var React = require('react');
  var ReactDom = require('react-dom');
  var TestUtils = require('react-addons-test-utils');

  var Home;
  beforeEach(function() {
    Home = require('../app/components/home.js');
  });
  it('should exist', function() {
    var mockOnTakeSurvey = function() {
    };
    var mockOnSeeProfile = function() {};
    var mockUsername = 'TheFraz';
    var home = TestUtils.renderIntoDocument(<div>
      <Home
      onTakeSurvey={mockOnTakeSurvey}
      onSeeProfile={mockOnTakeSurvey}
      username={mockUsername}
       />
      }
      </div>);
    var button = TestUtils.renderIntoDocument(
      <button onClick={mockOnTakeSurvey} /> );
    TestUtils.Simulate.click(button);
    expect(TestUtils.isDOMComponent(home)).toBeTruthy();
  });
});





