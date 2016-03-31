jest.unmock('../app/components/mainNavbar');

describe('Navbar', function() {
  var React = require('react');
  var ReactDom = require('react-dom');
  var TestUtils = require('react-addons-test-utils');

  var Navbar;
  beforeEach(function() {
    Navbar = require('../app/components/mainNavbar');
  });

  xit('should exist', function() {
    var navbar = TestUtils.renderIntoDocument(<Navbar />);
    expect(TestUtils.isCompositeComponent(navbar)).toBeTruthy();
  });
});
