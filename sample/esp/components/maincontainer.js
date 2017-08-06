function MainContainer(props) {
  Element.call(this, props);

  this.firstLoad = true;
  this.showLoading = false;
  this.espService = new EspApi(this.props.apiHost);
  //this.espService =  new EspApiMock('localhost');
  this.activeMenu = 'wifiStatus';
  this.data = null;

  this.createElement = function() {
    if (this.firstLoad) {
      this.loadData(this.activeMenu);
      this.firstLoad = false;
    }

    var content = [];
    if (this.data == null) {
      content.push(new Loading());
    } else {
      if (this.showLoading) {
        content.push(new Loading());
      }
      if (this.activeMenu == 'wifiStatus') {
        content.push(new NetworkStatus({attr:{}, data:this.data, onConnectToAccessPoint:this.connectToAccessPoint}));
      } else if (this.activeMenu == 'wifiNetworks') {
        content.push(new Networks({attr:{}, data:this.data, onConnectToNetwork:this.connectToNetwork}));
      } else if (this.activeMenu == 'mqttManager') {
        content.push(new MqttStatus({attr:{}, data:this.data, onConnectToMqtt:this.connectToMqtt}));
      } else if (this.activeMenu == 'pinsManager') {
        content.push(new Pins({attr:{}, espService:this.espService, data:this.data, onSetPinValue:this.setPinValue}));
      }
    }

  	return new Div({attr:{'class':'div-row', 'style':'height:90%;'}})
      .addChildren([
        new Div({attr:{'class':'div-col border-right', 'style':'width:15%; margin-top: 5px; background:#F2EAED;'}})
          .addChildren([
            new Menu({active:this.activeMenu, onclick:this.handleMenuEvent})
          ]),
        new Div({attr:{'class':'div-col', 'style':'width:85%; margin-top: 5px;'}})
          .addChildren(content)
        ]);
  }

  this.handleMenuEvent = function(id) {
    this.loadData(id);
    this.activeMenu = id;
    this.rerender();
  }.bind(this)

  this.loadData = function(dataType) {
    if (this.data == null || dataType != this.activeMenu) {
      this.data = null;

      var onLoadCallback = function(data) {
        this.data = data;
        console.log(JSON.stringify(data));
        this.rerender();
      }.bind(this);

      var onFailCallback = function(data) {
        this.data = "Error ocured during loading data";
        this.rerender();
        console.log(JSON.stringify(this.data));
      }.bind(this);


      if (dataType == 'wifiStatus') {
        this.espService.getNetworkStatus().then(onLoadCallback).catch(onFailCallback);
      } else if (dataType == 'wifiNetworks') {
        this.espService.getNetworks().then(onLoadCallback).catch(onFailCallback);
      } else if (dataType == 'mqttManager') {
        this.espService.getMqttStatus().then(onLoadCallback).catch(onFailCallback);
      } else if (dataType == 'pinsManager') {
        this.espService.getPins().then(onLoadCallback).catch(onFailCallback);
      }
    }
  }.bind(this)

  this.connectToAccessPoint = function() {
    this.showLoading = true;
    this.rerender();

    this.espService.startAccessPoint().then(function () {
      this.data = null;
      this.firstLoad = true;
      this.showLoading = false;
      this.rerender();
    }.bind(this)).catch(function() {
      this.data = null;
      this.firstLoad = true;
      this.showLoading = false;
      this.rerender();
    }.bind(this))
  }.bind(this)

  this.connectToNetwork = function(formData) {
    this.showLoading = true;
    this.rerender();

    this.espService.connectToNetwork(formData).then(function () {
      this.data = null;
      this.firstLoad = true;
      this.showLoading = false;
      this.rerender();
    }.bind(this)).catch(function() {
      this.data = null;
      this.firstLoad = true;
      this.showLoading = false;
      this.rerender();
    }.bind(this))
  }.bind(this)

  this.connectToMqtt = function(formData) {
    this.showLoading = true;
    this.rerender();

    this.espService.connectToMqtt(formData).then(function () {
      this.data = null;
      this.firstLoad = true;
      this.showLoading = false;
      this.rerender();
    }.bind(this)).catch(function() {
      this.data = null;
      this.firstLoad = true;
      this.showLoading = false;
      this.rerender();
    }.bind(this))
  }.bind(this)

  this.setPinValue= function(formData) {
    this.showLoading = true;
    this.rerender();

    this.espService.setPinValue(formData).then(function () {
      this.data = null;
      this.firstLoad = true;
      this.showLoading = false;
      this.rerender();
    }.bind(this)).catch(function() {
      this.data = null;
      this.firstLoad = true;
      this.showLoading = false;
      this.rerender();
    }.bind(this))
  }.bind(this)
}
