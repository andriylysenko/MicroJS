function EspApi(host) {
  this.host = host;

  this.getNetworkStatus = function() {
    return new Promise(function(resolve, reject) {
      var http = new HTTP("http://" + host + "/wifi/network/status");
      http.send("GET").then(function(data) {
        resolve(data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  this.getNetworks = function() {
    return new Promise(function(resolve, reject) {
      var http = new HTTP("http://" + host + "/wifi/networks");
      http.send("GET").then(function(data) {
        resolve(data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  this.startAccessPoint = function() {
    return new Promise(function(resolve, reject) {
      var http = new HTTP("http://" + host + "/wifi/accesspoint/start");
      http.send("GET").then(function(data) {
        resolve(data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  this.connectToNetwork = function(params) {
    return new Promise(function(resolve, reject) {
      var http = new HTTP("http://" + host + "/wifi/network/connect");
      http.send("POST", "payload=" + JSON.stringify(params)).then(function(data) {
        resolve(data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  this.getPins = function() {
    return new Promise(function(resolve, reject) {
      var http = new HTTP("http://" + host + "/pin/status");
      http.send("GET").then(function(data) {
        resolve(data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  this.getPin = function(pin) {
    return new Promise(function(resolve, reject) {
      var http = new HTTP("http://" + host + "/pin/status?payload=" + pin);
      http.send("GET").then(function(data) {
        resolve(data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  this.setPinValue = function(params) {
    return new Promise(function(resolve, reject) {
      var http = new HTTP("http://" + host + "/pin/set");
      http.send("POST", "payload=" + JSON.stringify(params)).then(function(data) {
        resolve(data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  this.getMqttStatus = function() {
    return new Promise(function(resolve, reject) {
      var http = new HTTP("http://" + host + "/mqtt/status");
      http.send("GET").then(function(data) {
        resolve(data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  this.connectToMqtt = function(params) {
    return new Promise(function(resolve, reject) {
      var http = new HTTP("http://" + host + "/mqtt/status");
      http.send("POST", "payload=" + JSON.stringify(params)).then(function(data) {
        resolve(data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }
}
