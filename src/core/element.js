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
