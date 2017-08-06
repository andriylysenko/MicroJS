function DeviceDiscover() {

  this.getDiscoveredDevices = function() {
    return new Promise(function(resolve) {
      var data = {"devices":['192.168.1.3', '192.168.1.4', '192.168.1.6']};
      setTimeout(function() {
        resolve(data);
      }, 100);
    });
  }
}