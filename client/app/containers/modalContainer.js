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
    color                 : '#586994'
  }
};


var QuotePopUp = React.createClass({

  render: function() {
    return (
      <div>
        <Tile>
          <div
            onClick={this.props.actions.toggleModal}
            style={{
                cursor: "pointer",
                color: "white",
                fontSize: 20+"px",
                backgroundColor: "#7A9E9F",
                textAlign: 'center'
            }}>
              Tip of The Day!
          </div>
        </Tile>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.actions.toggleModal}
          style={customStyles} >

          <h2>Hello</h2>
          <pre>{JSON.stringify(this.props.quote.quote)}</pre>
          <pre>{JSON.stringify(this.props.quote.author)}</pre>
          <div
            onClick={this.props.actions.toggleModal}
            style={{
              cursor: "pointer",
              color: "white",
              fontSize: 20+"px",
              backgroundColor: "#7A9E9F",
              textAlign: 'center'
            }}>
              Close
            </div>
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
