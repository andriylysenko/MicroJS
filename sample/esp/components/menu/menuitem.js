function MenuItem(props) {
  Element.call(this, props);

  this.createElement = function() {
    var itemProps = {attr:this.props.attr, onclick:this.handleEvent};
    if (this.props.active !== 'undefined' && this.props.active) {
      itemProps.attr.class += ' menu-item-active';
    }
  	return new Div(itemProps)
      .addChildren([new Text(this.props)]);
  }

  this.handleEvent = function(event) {
    this.props.onclick(event, this.props.attr.id);
  }.bind(this);

}
