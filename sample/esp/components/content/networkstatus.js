function NetworkStatus(props) {
  Element.call(this, props);

  this.showConnectModal = false;

  this.tableMetadata = {table:{attr:{id:'table', class:'table'}},
                        tbody:{attr:{}},
                        htr:{attr:{class:'header'}},
                        th:{attr:{}},
                        tr:{attr:{}},
                        td:{attr:{}},
                        columns:[ {name:'Property', attr:{width:'50%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, edit:false, filter:false, type:'data', cellType:'text'},
                                  {name:'Value', attr:{width:'50%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, editable:false, filter:false, type:'data', cellType:'text'}
                                ]
                       };

  this.createElement = function() {
    var children = [];

    children.push(new Div({attr:{class:'div-well-inv font30'}})
      .addChildren([new Text({attr:{text:'Network Status'}})]));

    children.push(new Hr({}));

    children.push(new Div({attr:{class:'div-well font20', style:'overflow: auto; max-height: 70%'}})
      .addChildren([
        new Button({attr:{id:'startHotspotButton', class:'action-white'}, onclick:this.startAccessPointModal}).addChildren([new Text({attr:{text:'Start Access Point'}})]),
        new Hr({}),
        new Div({attr:{style:'background-color: white;'}}).addChildren([new SimpleTable({attr:{}, metadata:this.tableMetadata, data:this.transformData(this.props.data)})])
      ]));

    children.push(new Hr({}));

    if (this.showConnectModal == true) {
      children.push(new Modal({attr:{}, onclose:this.onModalClose, header:new Text({attr:{text:'Connect To Network'}}), content:new AccessPoint({attr:{}, onSuccess:this.onConnectToAccessPoint})}));
    }
    return new Div({attr:{class:'div-container'}})
      .addChildren(
        children
      );
  }

  this.startAccessPointModal = function() {
    this.showConnectModal = true;
    this.rerender();
  }.bind(this)

  this.onModalClose = function() {
    this.showConnectModal = false;
    this.rerender();
  }.bind(this)

  this.onConnectToAccessPoint = function() {
    this.props.onConnectToAccessPoint();
  }.bind(this)

  this.transformData = function(data) {
    var result = [];
    for (var key in data.network) {
      var row = {};
      row["property"] = key;
      row["value"] = data.network[key];
      result.push(row);
    }
    return result;
  }

}
