function PinPuller(props) {
  Element.call(this, props);

  this.espService = this.props.espService;
  this.pinValue = this.props.pinValue;

  setInterval(function() {
    this.espService.getPin(this.props.pin).then(function(data) {
      this.pinValue = data.pin.value;
      this.rerender();
    }.bind(this))
  }.bind(this), 3000);

  this.createElement = function() {
    return new Div({}).addChildren([new Text({attr:{text:this.pinValue}})]);
  }
}