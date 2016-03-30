var React = require('react');
var Modal = require('react-modal');
var Tile = require('../components/tile');
var connect = require('react-redux').connect;
var modalActions = require('../actions/modalActions');
var bindActionCreators = require('redux').bindActionCreators;

var customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    color                 : 'black'
  }
};


var QuotePopUp = React.createClass({
  
  render: function() {
    return (
      <div>
        <Tile>
          <button onClick={this.props.actions.toggleModal}>Tip of The Day!</button>
        </Tile>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.actions.toggleModal}
          style={customStyles} >

          <h2>Hello</h2>
          <button onClick={this.props.actions.toggleModal}>close</button>
          <pre>{JSON.stringify(this.props.quote.quote)}</pre>
          <pre>{JSON.stringify(this.props.quote.author)}</pre>
        </Modal>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return Object.assign({}, state.modalReducer);
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(modalActions, dispatch)
  }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(QuotePopUp);
