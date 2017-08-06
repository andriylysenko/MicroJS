function DomElement(name, props) {
  Element.call(this, props);
  this.name = name;

  this.createElement = function() {
    var el = document.createElement(name);
    if (typeof this.props !== 'undefined' && typeof this.props.attr !== 'undefined') {
      for (var key in this.props.attr) {
        el.setAttribute(key, this.props.attr[key]);
      }
    }

    if (typeof this.props.onclick != 'undefined') {
      el.onclick = (function(e) {
        this.props.onclick(e);
      }.bind(this));
    }
    if (typeof this.props.ondblclick != 'undefined') {
      el.onclick = (function(e) {
        this.props.ondblclick(e);
      }.bind(this));
    }

    if (typeof this.props.onchange != 'undefined') {
      el.onchange = (function(e) {
        this.props.onchange(e);
      }.bind(this));
    }

    if (typeof this.props.onmouseover != 'undefined') {
      el.onmouseover = (function(e) {
        this.props.onmouseover(e);
      }.bind(this));
    }

    if (typeof this.props.onmouseout != 'undefined') {
      el.onmouseout = (function(e) {
        this.props.onmouseout(e);
      }.bind(this));
    }

    if (typeof this.props.onkeydown != 'undefined') {
      el.onkeydown = (function(e) {
        this.props.onkeydown(e);
      }.bind(this));
    }

  	return el;
  }
}
