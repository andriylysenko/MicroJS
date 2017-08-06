function EspApiMock(host) {
  this.host = host;

  this.getNetworkStatus = function() {
    return new Promise(function(resolve) {
      var data = {"network":{"status":"connected", "ssid":"DA9E56", "macaddress":"73:37:34:7f:cf:5c", "mode":"STA"}};
      setTimeout(function() {
        resolve(data);
      }, 1000);
    });
  }

  this.getNetworks = function() {
    return new Promise(function(resolve) {
      var data = {"networks":[{"ssid": "NETGEAR-Timothy","rssi": "-91","encryption": "encrypted"},{"ssid": "optimumwifi","rssi": "-91","encryption": "none"},{"ssid": "optimumwifi_Passpoint","rssi": "-91","encryption": "none"},{"ssid": "optimumwifi","rssi": "-88","encryption": "none"},{"ssid": "TWCWiFi","rssi": "-89","encryption": "none"},{"ssid": "CableWiFi","rssi": "-89","encryption": "none"},{"ssid": "63BCC","rssi": "-90","encryption": "encrypted"},{"ssid": "63BCC_EXT","rssi":"-91","encryption": "encrypted"},{"ssid": "DA9E56","rssi": "-54","encryption": "encrypted"},{"ssid": "WeissNET","rssi": "-89","encryption": "encrypted"},{"ssid": "optimumwifi","rssi": "-54","encryption": "none"},{"ssid": "optimumwifi","rssi": "-91","encryption": "none"},{"ssid": "520860","rssi": "-94","encryption": "encrypted"},{"ssid": "optimumwifi_Passpoint","rssi": "-89","encryption": "encrypted"},{"ssid": "GRACIE","rssi": "-95","encryption": "encrypted"},{"ssid":"xfinitywifi","rssi": "-91","encryption": "none"},{"ssid": "FiOS-N7Q6S","rssi": "-73","encryption": "encrypted"}]};
      setTimeout(function() {
        resolve(data);
      }, 1000);
    });
  }

  this.startAccessPoint = function() {
    return new Promise(function(resolve) {
      var data = {status:'success'};
      setTimeout(function() {
        resolve(data);
      }, 1000);
    });
  }

  this.connectToNetwork = function(params) {
    return new Promise(function(resolve) {
      var data = {};
      setTimeout(function() {
        resolve(data);
      }, 1000);
    });
  }

  this.getPins = function() {
    return new Promise(function(resolve) {
      var data = {"pins":[{"pin":"4","name":"light","direction":"IN","type":"ANALOG","event":["ANY"],"value":"38"},{"pin":"13","name":"humidity","direction":"IN","type":"DIGITAL","event":["ANY"],"value":"45"},{"pin":"12","name":"temperature","direction":"IN","type":"DIGITAL","event":["ANY"],"value":"28"}]};
      setTimeout(function() {
        resolve(data);
      }, 1000);
    });
  }

  this.setPinValue = function(params) {
    return new Promise(function(resolve) {
      var data = {};
      setTimeout(function() {
        resolve(data);
      }, 1000);
    });
  }

  this.getMqttStatus = function() {
    return new Promise(function(resolve) {
      var data = {"mqtt":{"status":"connected","host":"192.168.1.20","port":"1883","user":"openhab","listeners":["echo/topic"]}};
      setTimeout(function() {
        resolve(data);
      }, 1000);
    });
  }

  this.connectToMqtt = function(params) {
    return new Promise(function(resolve) {
      var data = {};
      setTimeout(function() {
        resolve(data);
      }, 1000);
    });
  }
}
