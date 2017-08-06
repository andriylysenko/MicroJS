function PinValue(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new Div({attr:{}})
      .addChildren([
        new Div({attr:{class:'div-container'}})
          .addChildren([
            new Div({attr:{class:'div-well font100', style:'margin-right: 0px; margin-left: 0px; text-align: center;'}})
              .addChildren([
                new PinPuller({espService:this.props.espService, pin:this.props.pin.pin, pinValue:this.props.pin.value})
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
                      .addChildren([new Text({attr:{text:'Close'}})])
                  ])
              ])
          ])
      ]);
  }

  this.handleSuccessEvent = function() {
    this.props.onSuccess(this.formData);
  }.bind(this)
}
