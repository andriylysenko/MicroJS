function HTTP(url) {
  this.url = url;


  this.send = function(method, data) {
    return new Promise(function(resolve, reject) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.open(method, url);
      httpRequest.onload = function() {
        resolve(JSON.parse(httpRequest.responseText));
      };
      httpRequest.onerror = function() {
        reject(httpRequest.statusText);
      };
      if (data !== undefined) {
        httpRequest.send(data);
      } else {
        httpRequest.send();
      }
    });
  }
}
