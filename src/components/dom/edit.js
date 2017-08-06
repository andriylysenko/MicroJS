function Edit(props) {
  Element.call(this, props);

  this.createElement = function() {
    this.props.attr['type'] = 'text';
    return new DomElement('input', this.props);
  }
}
