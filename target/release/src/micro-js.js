function Button(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('button', this.props);
  }
}
function Div(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('div', this.props);
  }
}
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
function Edit(props) {
  Element.call(this, props);

  this.createElement = function() {
    this.props.attr['type'] = 'text';
    return new DomElement('input', this.props);
  }
}
function Element(props) {
  this.props = props;
  this.children = null;
  this.parentDom = null;
  this.currentDom = null;
  this.parentElement = null;
  this.mountedElement = null;

  this.addChildren = function(children) {
    if (this.children == null) {
      this.children = [];
    }
    if (children != null) {
      children.forEach(function(child) {
        child.setParent(this);
        this.children.push(child);
      }.bind(this));
    }
    return this;
  }

  this.setParent = function(parentElement) {
    this.parentElement = parentElement;
  }

  this.mountInternal = function(parent) {
    this.parentDom = parent;
    var element = this.createElement();
    this.mountedElement = element;
    if (!(element instanceof Node)) {
      this.currentDom = element.mountInternal(parent);
    } else {
      parent.appendChild(element);
      this.currentDom = element;
    }

    if (this.children != null) {
      this.children.forEach(function(child) {
        child.currentDom = child.mountInternal(this.currentDom);
      }.bind(this));
    }

    return this.currentDom;
  }

  this.mount = function(parent) {
    this.currentDom = this.mountInternal(parent);
  }

  this.umount = function() {
    this.destroyElement();
    if (this.children !== null) {
      this.children.forEach(function(child) {
        child.umount();
      }.bind(this));
    }
    if (!(this.mountedElement instanceof Node)) {
      this.mountedElement.umount();
    }
  }

  this.rerender = function() {
    // while (this.parentDom.firstChild) {
    //   this.parentDom.removeChild(this.parentDom.firstChild);
    // }
    // if (this.parentElement != null) {
    //   this.parentElement.children.forEach(function(child) {
    //     child.mount(child.parentDom);
    //   }.bind(this));
    // } else {
    //   this.mount(this.parentDom);
    // }
    //this.umount();

    if (this.children !== null) {
      this.children.forEach(function(child) {
        child.umount();
      }.bind(this));
    }
    if (!(this.mountedElement instanceof Node)) {
      this.mountedElement.umount();
    }
    //TODO check the line below for correctness
    this.currentDom.parentNode.removeChild(this.currentDom);
    this.mount(this.parentDom);
  }

  this.createElement = function() {}

  this.destroyElement = function() {}
}
function Hr(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('hr', this.props);
  }
}
function HTTP(url) {
  this.url = url;


  this.send = function(method, data) {
    return new Promise(function(resolve, reject) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.open(method, url);
      httpRequest.onload = function() {
        resolve(JSON.parse(httpRequest.responseText));
      };
      httpRequest.onerror = function() {
        reject(httpRequest.statusText);
      };
      if (data !== undefined) {
        httpRequest.send(data);
      } else {
        httpRequest.send();
      }
    });
  }
}
function Option(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('option', this.props);
  }
}function Select(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('select', this.props);
  }
}function Span(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('span', this.props);
  }
}
function HeaderCell(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new DomElement('th', this.props);
  }
}

function Cell(props) {
  Element.call(this, props);

  this.createElement = function() {
  	return new DomElement('td', this.props);;
  }
}

function Row(props) {
  Element.call(this, props);

  this.createElement = function() {
  	return new DomElement('tr', this.props);
  }
}

function TableBody(props) {
  Element.call(this, props);

  this.createElement = function() {
  	return new DomElement('tbody', this.props);;
  }
}

function Table(props) {
  Element.call(this, props);

  this.createElement = function() {
  	return new DomElement('table', this.props);
  }
}
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
