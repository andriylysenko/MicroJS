function Text(props) {
  Element.call(this, props);

  this.createElement = function() {
    var text = "";
    if (typeof this.props !== 'undefined' && typeof this.props.attr !== 'undefined') {
      text = this.props.attr.text;
    }
    var textEl = document.createTextNode(text);
  	return textEl;
  }
}
