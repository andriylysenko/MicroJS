function Header(props) {
  Element.call(this, props);

  this.createElement = function() {
    var devices = [];
    if (this.props.apiHosts != null) {
      this.props.apiHosts.forEach(function(host) {
        devices.push(new Option(host == this.props.apiHost ? {attr:{'selected':'selected'}} : {attr:{}}).addChildren([new Text({attr:{'text':host}})]));
      }.bind(this));
    }

    return new Div({attr:{'class':'div-row border-bottom', 'style':'min-height:80px; height:10%; background:#888C46;'}})
      .addChildren([new Div({attr:{'class':'div-flex'}})
        .addChildren([
          new Div({attr:{'class':'div-container font30'}})
            .addChildren([
              new Text({attr:{'text':'ESP8266 Web Manager'}})
            ]),
          new Div({attr:{'class':'div-container font20'}})
            .addChildren([
              new Select({attr:{'class':'action'}, onchange:this.handleEvent})
                .addChildren(
                  devices
                )
            ])
        ])
      ]);    
  }

  this.handleEvent = function(event) {
    this.props.onApiHostChange(event.target.value);
  }.bind(this);
}
