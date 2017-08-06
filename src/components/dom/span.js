function Span(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('span', this.props);
  }
}
