function Main(props) {
  Element.call(this, props);

  this.devices = new DeviceDiscover();

  this.apiHost = null;
  this.apiHosts = null;

  this.createElement = function() {
    if (this.apiHosts == null) {
      this.devices.getDiscoveredDevices().then(function(data) {
        this.apiHosts = data.devices;
        this.apiHost = this.apiHosts[0];
        this.rerender();
      }.bind(this));
    }
    return new Div({attr:{'id':'mainContainer', 'style':'width:100%'}})
      .addChildren([
        new Header({onApiHostChange:this.setApiHost, apiHosts:this.apiHosts, apiHost:this.apiHost}),
        this.apiHosts != null ? new MainContainer({'apiHost':this.apiHost}) : new Loading()
      ]);
  }

  this.setApiHost = function(host) {
    this.apiHost = host;
    this.rerender();
  }.bind(this)
}
