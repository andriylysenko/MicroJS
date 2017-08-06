function Button(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('button', this.props);
  }
}
