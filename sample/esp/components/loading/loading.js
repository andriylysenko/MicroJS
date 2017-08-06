function Loading(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new Div({attr:{'id':'loader'}});
  }
}
