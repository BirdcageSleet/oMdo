var React = require('react');
var Tile = require('../tile');

function NumericalQuestion (props) {
  return (
    <Tile key={props.key}>
      <p>{props.text}</p>
      <select onChange={props.handleChange} tabIndex={props.tabIndex}>
        <option value="1" >{props.options[0]}</option>
        <option value="2" >{props.options[1]}</option>
        <option defaultValue="3" >{props.options[2]}</option>
        <option value="4" >{props.options[3]}</option>
        <option value="5" >{props.options[4]}</option>
      </select>
      {props.children}
    </Tile>
  )
}

module.exports = NumericalQuestion;
