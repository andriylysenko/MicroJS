function Modal(props) {
  Element.call(this, props);

  this.createElement = function() {
    var header = this.props.header;
    var content = this.props.content;

  	return new Div({attr:{class:'modal'}})
      .addChildren([
        new Div({attr:{class:'modalContent'}})
          .addChildren([
            new Div({attr:{class:'modalHeader'}})
              .addChildren([
                new Div({attr:{class:'modalHeaderText font20'}})
                  .addChildren([header]),
                new Div({attr:{class:'modalHeaderClose font30'}, onclick:this.handleEvent})
                  .addChildren([new Text({attr:{text:'\u00D7'}})])
                ]),
            content
          ])
        ]);
  }

  this.handleEvent = function(event) {
    this.props.onclose();
  }.bind(this);
}
