var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  startTimer: function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({count: newCount});
    }, 1000);
  },
  getInitialState: function(){
    return {
      count: 0,
      countupStatus: 'paused'
    }
  },
  handleStatusChange: function(newStatus){
    this.setState({countupStatus: newStatus});
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countupStatus != prevState.countupStatus){
      switch(this.state.countupStatus){
        case 'started':
          this.startTimer();
          break;

        case 'stopped':
          this.setState({
            count: 0,
            countupStatus: 'paused'
          });

        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  render: function(){
    var {count, countupStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={countupStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  },
});

module.exports = Timer;
