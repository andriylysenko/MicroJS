function Networks(props) {
  Element.call(this, props);

  this.wifiNetworkConnect = null;

  this.handleTableEvent = function(row, key) {
    //alert(JSON.stringify(key) + JSON.stringify(row));
    this.wifiNetworkConnect = new Modal({attr:{}, onclose:this.onModalClose, header:new Text({attr:{text:'Connect To ' + row.ssid}}), content:new Wifi({attr:{}, network:row, onSuccess:this.onConnectToNetwork})});
    this.rerender();
  }.bind(this)

  this.tableMetadata = {table:{attr:{id:'table', class:'table'}},
                        tbody:{attr:{}},
                        htr:{attr:{class:'header'}},
                        th:{attr:{}},
                        tr:{attr:{}},
                        td:{attr:{}},
                        columns:[ {name:'Network ID', attr:{width:'30%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, edit:false, filter:false, type:'data', cellType:'text', onclick:this.handleTableEvent},
                                  {name:'RSSI', attr:{width:'30%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, editable:false, filter:false, type:'data', cellType:'text', onclick:this.handleTableEvent},
                                  {name:'Encription', attr:{width:'30%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, editable:false, filter:false, type:'data', cellType:'text'},
                                  {name:'Action', attr:{width:'10%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'action'}, editable:false, filter:false, type:'action', cellType:'button', actionName:'Connect', onclick:this.handleTableEvent}
                                ]
                       };

  this.createElement = function() {
    var children = [];
    children.push(new Div({attr:{class:'div-well-inv font30'}})
      .addChildren([new Text({attr:{text:'WiFi Networks'}})]));

    children.push(new Hr({}));
    children.push(new Div({attr:{class:'div-well font20', style:'overflow: auto; max-height: 70%'}})
      .addChildren([
        new Div({attr:{style:'background-color: white;'}})
          .addChildren([
            new SimpleTable({attr:{}, metadata:this.tableMetadata, data:this.props.data.networks})
          ])
      ])
    );
    children.push(new Hr({}));

    if (this.wifiNetworkConnect != null) {
      children.push(this.wifiNetworkConnect);
    }
    return new Div({attr:{class:'div-container'}})
      .addChildren(children);
  }

  this.onModalClose = function() {
    this.wifiNetworkConnect = null;
    this.rerender();
  }.bind(this);

  this.onConnectToNetwork = function(formData) {
    this.props.onConnectToNetwork(formData);
  }.bind(this);

}
