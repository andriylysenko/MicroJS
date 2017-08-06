function ActionCell(props) {
  Element.call(this, props);

  this.createElement = function() {
    var cellProps = {attr:this.props.attr};
    var itemProps = {attr:this.props.actionAttr, onclick:this.handleEvent};

    var cellType = this.props.cellType;
    var cell = null;
    if (cellType == 'button') {
      cell = new Button(itemProps).addChildren([new Text({attr:this.props.attr})]);
    } else {
      cell = new Div(itemProps).addChildren([new Text({attr:this.props.attr})]);
    }

    return new Cell(cellProps)
      .addChildren(
        [
          cell
        ]);
  }

  this.handleEvent = function(event) {
    if (typeof this.props.onclick != 'undefined') {
      this.props.onclick(this.props.row, this.props.key);
    }
  }.bind(this);
}
