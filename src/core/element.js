function Element(props) {
  this.props = props;
  this.children = null;
  this.parentDom = null;
  this.parentElement = null;

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

  this.mount = function(parent) {
    this.parentDom = parent;
    var element = this.createElement();
    if (!(element instanceof Node)) {
      element.addChildren(this.children);
      element.mount(parent);
    } else {
      parent.appendChild(element);
      if (this.children !== null) {
        this.children.forEach(function(child) {
          child.mount(element);
        });
      }
    }
  }

  this.rerender = function() {
    while (this.parentDom.firstChild) {
      this.parentDom.removeChild(this.parentDom.firstChild);
    }
    if (this.parentElement != null) {
      this.parentElement.children.forEach(function(child) {
        child.mount(child.parentDom);
      }.bind(this));
    } else {
      this.mount(this.parentDom);
    }
  }

  this.createElement = function() {}
}
