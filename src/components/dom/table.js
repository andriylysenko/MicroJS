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
