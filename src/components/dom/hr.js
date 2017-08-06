function Hr(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('hr', this.props);
  }
}
