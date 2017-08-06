function Menu(props) {
  Element.call(this, props);

  this.menu = {'wifiStatus': {'text':'Network Status', 'active':false},
               'wifiNetworks': {'text':'WiFi Networks', 'active':false},
               'mqttManager': {'text':'MQTT Manager', 'active':false},
               'pinsManager': {'text':'Pins Manager', 'active':false}
              };
  this.currentMenuItem = this.props.active;

  this.createElement = function() {
    this.menu[this.currentMenuItem].active = true;

    var menuItems = [];
    for (var id in this.menu) {
      menuItems.push(new MenuItem({attr:{'id':id, 'class':'menu-item div-container font20', 'text':this.menu[id].text}, 'active':this.menu[id].active, onclick:this.handleEvent}));
    }

    return new Div({attr:{'class':'menu'}})
      .addChildren(menuItems);
  }

  this.handleEvent = function(event, id) {
    this.menu[this.currentMenuItem].active = false;
    this.menu[id].active = true;
    this.currentMenuItem = id;
    if (typeof this.props.onclick != 'undefined') {
      this.props.onclick(id);
    } else {
      this.rerender();
    }
  }.bind(this)
}
