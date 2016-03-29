module.exports = {
  getInitialState: function() {
    this.props.children.length
    ? this.handlers = this.props.children.reduce(function(memo, child, i) {
        memo[i] = this.props.switchView.bind(this, i);
        return memo;
      }.bind(this), {})
    : {'0': this.props.switchView(this, 0)};
    return null;
  }
};
