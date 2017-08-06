function Pin(props) {
  Element.call(this, props);

  this.formData = {pin:this.props.pin.pin, value:this.props.pin.value};

  this.createElement = function() {
    return new Div({attr:{}})
      .addChildren([
        new Div({attr:{class:'div-container'}})
          .addChildren([
            new Div({attr:{class:'div-well font20', style:'margin-right: 0px; margin-left: 0px;'}})
              .addChildren([
                new Edit({attr:{class:'edit', placeholder:'Enter Value', value:this.props.pin.value, name:'value'}, onchange:this.handleFormChange})
              ])
          ]),
        new Div({attr:{class:'div-container', style:'padding-top: 0px;'}})
          .addChildren([
            new Div({attr:{class:'div-flex'}})
              .addChildren([
                new Div({}),
                new Div({})
                  .addChildren([
                    new Button({attr:{class:'action'}, onclick:this.handleSuccessEvent})
                      .addChildren([new Text({attr:{text:'Set'}})])
                  ])
              ])
          ])
      ]);
  }

  this.handleFormChange = function(event) {
    this.formData[event.target.name] = event.target.value;
  }.bind(this)

  this.handleSuccessEvent = function() {
    this.props.onSuccess(this.formData);
  }.bind(this)
}
