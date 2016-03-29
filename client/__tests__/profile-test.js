var Profile = require('../app/components/profile/profile');
console.log(Profile)
jest.unmock('../app/components/profile/profile.js');

describe('Profile', function() {
  var React = require('react');
  var ReactDom = require('react-dom');
  var TestUtils = require('react-addons-test-utils');
  var Profile = require('../app/components/profile/profile');
  var props, renderer, output, result;

  beforeEach(function() {
    props = {
      username: 'alon'
    };

    renderer = TestUtils.createRenderer();
    renderer.render(<Profile props />);

    output = renderer.getRenderOutput();

    result = {
      props: props,
      output: output,
      renderer: renderer
    }
  });

  it('should render properly', function() {
    expect(result.output.type).toEqual('div');
    expect(result.props.username).toBe('alon');

    var children = result.output.props.children;
    expect(children.type).toBe('h1');
    expect(children.props.onClick).toBe(undefined);
    expect(children.props.reduxResult).toBe(undefined);

    // expect(children.type).toBe('svg'); //Supposed to be broken
    // var profile = TestUtils.renderIntoDocument(<Profile />);
    // expect(TestUtils.isCompositeComponent(profile)).toBeTruthy();
  });

  it('should display a "no data" message if there is no data', function(){
    var firstSvgEl = result.output.children[1].children[0];
    expect(firstSvgEl.text).toEqual('Please fill out some daily surveys or take\
     a selfie!');
  });
});
