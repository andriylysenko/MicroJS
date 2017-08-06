function Option(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('option', this.props);
  }
}