function Select(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('select', this.props);
  }
}