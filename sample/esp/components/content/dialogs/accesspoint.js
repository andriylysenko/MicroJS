function AccessPoint(props) {
  Element.call(this, props);

  this.createElement = function() {
    return new Div({attr:{}})
      .addChildren([
        new Div({attr:{class:'div-container'}})
          .addChildren([
            new Div({attr:{class:'div-well font20', style:'margin-right: 0px; margin-left: 0px;'}})
              .addChildren([new Text({attr:{text:'Start Access Point ESP8266_AP/ESP8266_AP'}})])
          ]),
        new Div({attr:{class:'div-container', style:'padding-top: 0px;'}})
          .addChildren([
            new Div({attr:{class:'div-flex'}})
              .addChildren([
                new Div({}),
                new Div({})
                  .addChildren([
                    new Button({attr:{class:'action'}, onclick:this.handleSuccessEvent})
                      .addChildren([new Text({attr:{text:'Start'}})])
                  ])
              ])
          ])
      ]);
  }

  this.handleSuccessEvent = function() {
    this.props.onSuccess();
  }.bind(this)
}
