module.exports = {
  getInitialState: function() {
    this.handlers = {};
    this.handlers.slider = {
      feeling: function(e) {
        var feeling = e.target.value;
        this.props.actions.feelingChange(feeling);
      }.bind(this),
      anxiety: function(e) {
        var anxiety = e.target.value;
        this.props.actions.anxietyChange(anxiety);
      }.bind(this),
      energy: function(e) {
        var energy = e.target.value;
        this.props.actions.energyChange(energy);
      }.bind(this),
    };

    this.handlers.selector = {
      sleep: function(e) {
        var sleep = e.target.value;
        this.props.actions.sleepChange(sleep);
      }.bind(this),
      mood: function(e) {
        var mood = e.target.value;
        this.props.actions.moodChange(mood);
      }.bind(this),
    };

    this.handlers.text = {
      sleep: function(e) {
        var sleepDetail = e.target.value;
        this.props.actions.sleepElaborateChange(sleepDetail);
      }.bind(this),
      mood: function(e) {
        var moodDetail = e.target.value;
        this.props.actions.moodElaborateChange(moodDetail);
      }.bind(this),
      event: function(e) {
        var eventDetail = e.target.value;
        this.props.actions.eventElaborateChange(eventDetail);
      }.bind(this)
    };

    this.handlers.boolean = {
      event: function(e) {
        var eventChange = e.target.value;
        this.props.actions.majorEventChange(eventChange);
      }.bind(this),
    }

    return null;
  }
};
