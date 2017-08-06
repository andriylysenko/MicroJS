function Mqtt(props) {
  Element.call(this, props);

  this.formData = {host:'', port:0, user:'', password:''};

  this.createElement = function() {
    return new Div({attr:{}})
      .addChildren([
        new Div({attr:{class:'div-container'}})
          .addChildren([
            new Div({attr:{class:'div-well font20', style:'margin-right: 0px; margin-left: 0px;'}})
              .addChildren([
                new Edit({attr:{name:'host', class:'edit', placeholder:'Host', style:'margin-bottom:10px'}, onchange:this.handleFormChange}),
                new Edit({attr:{name:'port', class:'edit', placeholder:'Port', style:'margin-bottom:10px'}, onchange:this.handleFormChange}),
                new Edit({attr:{name:'user', class:'edit', placeholder:'User', style:'margin-bottom:10px'}, onchange:this.handleFormChange}),
                new Edit({attr:{name:'password', class:'edit', placeholder:'Password'}, onchange:this.handleFormChange})
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
                      .addChildren([new Text({attr:{text:'Connect'}})])
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
