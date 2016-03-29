jest.unmock('../app/components/main.js');

describe('About', function() {
  var React = require('react');
  var ReactDom = require('react-dom');
  var TestUtils = require('react-addons-test-utils');

  var Main;
  beforeEach(function() {
    Main = require('../app/components/main');
  });

  it('should exist', function() {
    var main = TestUtils.renderIntoDocument(<Main />);
    expect(TestUtils.isCompositeComponent(main)).toBeTruthy();
  });
});
