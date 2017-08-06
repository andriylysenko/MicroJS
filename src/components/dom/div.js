function Div(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('div', this.props);
  }
}
