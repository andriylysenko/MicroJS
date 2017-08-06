function MqttStatus(props) {
  Element.call(this, props);

  this.showConnectModal = false;

  this.handleTableEvent = function(row, key) {
    alert(JSON.stringify(key) + JSON.stringify(row));
  }.bind(this)

  this.tableMetadata = {table:{attr:{id:'table', class:'table'}},
                        tbody:{attr:{}},
                        htr:{attr:{class:'header'}},
                        th:{attr:{}},
                        tr:{attr:{}},
                        td:{attr:{}},
                        columns:[ {name:'Property', attr:{width:'50%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, edit:false, filter:false, type:'data', cellType:'text', onclick:this.handleTableEvent},
                                  {name:'Value', attr:{width:'50%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, editable:false, filter:false, type:'data', cellType:'text', onclick:this.handleTableEvent}
                                ]
                       };

  this.createElement = function() {
    var children = [];

    children.push(new Div({attr:{class:'div-well-inv font30'}})
      .addChildren([new Text({attr:{text:'MQTT Manager'}})]));

    children.push(new Hr({}));

    children.push(new Div({attr:{class:'div-well font20', style:'overflow: auto; max-height: 70%'}})
      .addChildren([
        new Button({attr:{id:'connectToMqttButton', class:'action-white'}, onclick:this.connectToMqttModal}).addChildren([new Text({attr:{text:'Connect To Mqtt'}})]),
        new Hr({}),
        new Div({attr:{style:'background-color: white;'}}).addChildren([new SimpleTable({attr:{}, metadata:this.tableMetadata, data:this.transformData(this.props.data)})])
      ]));

    children.push(new Hr({}));

    //children.push(new Button({attr:{id:'connectToMqttButton', class:'actionButton', style:'float: right; margin-bottom: 15px;'}, onclick:this.connectToMqttModal})
    //  .addChildren([new Text({attr:{text:'Connect To Mqtt'}})]));
    //children.push(new SimpleTable({attr:{}, metadata:this.tableMetadata, data:this.transformData(this.props.data)}));
    if (this.showConnectModal == true) {
      children.push(new Modal({attr:{}, onclose:this.onModalClose, header:new Text({attr:{text:'Connect To MQTT'}}), content:new Mqtt({attr:{}, onSuccess:this.onConnectToMqtt})}));
    }
    return new Div({attr:{class:'div-container'}})
      .addChildren(children);
  }

  this.connectToMqttModal = function() {
    this.showConnectModal = true;
    this.rerender();
  }.bind(this)

  this.onModalClose = function() {
    this.showConnectModal = false;
    this.rerender();
  }.bind(this)

  this.onConnectToMqtt = function(formData) {
    this.props.onConnectToMqtt(formData);
  }.bind(this)

  this.transformData = function(data) {
    var result = [];
    for (var key in data.mqtt) {
      var row = {};
      row["property"] = key;
      row["value"] = data.mqtt[key];
      result.push(row);
    }
    return result;
  }

}
