function Wifi(props) {
  Element.call(this, props);

  this.formData = {ssid:this.props.network.ssid, password:''};

  this.createElement = function() {
    return new Div({attr:{}})
      .addChildren([
        new Div({attr:{class:'div-container'}})
          .addChildren([
            new Div({attr:{class:'div-well font20', style:'margin-right: 0px; margin-left: 0px;'}})
              .addChildren([
                new Edit({attr:{class:'edit', placeholder:'Enter Password'}, onchange:this.handleFormChange})
              ])
          ]),
        new Div({attr:{class:'div-container', style:'padding-top: 0px;'}})
          .addChildren([
            new Div({attr:{class:'modalAction'}})
              .addChildren([
                new Div({}),
                new Div({})
                  .addChildren([
                    new Button({attr:{class:'action'}, onclick:this.handleSuccessEvent})
                      .addChildren([new Text({attr:{text:'Connect'}})])
                  ])
              ])
          ])
      ]);
  }

  this.handleFormChange = function(event) {
    this.formData.password = event.target.value;
  }.bind(this)

  this.handleSuccessEvent = function() {
    this.props.onSuccess(this.formData);
  }.bind(this)
}
