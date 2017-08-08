function Pins(props) {
  Element.call(this, props);

  this.pin = null;

  this.handleTableEvent = function(row, key) {
    this.pin = new Modal({attr:{}, onclose:this.onModalClose, header:new Text({attr:{text:'Set ' + row.name + ' value'}}), content:new Pin({attr:{}, pin:row, onSuccess:this.onSetPinValue})});
    this.rerender();
  }.bind(this)

  this.openValuePuller = function(row, key) {
    this.pin = new Modal({attr:{}, onclose:this.onModalClose, header:new Text({attr:{text:'Monitor ' + row.name + ' value'}}), content:new PinValue({attr:{}, espService:this.props.espService, pin:row, onSuccess:this.onModalClose})});
    this.rerender();
  }.bind(this)

  this.tableMetadata = {table:{attr:{id:'table', class:'table'}},
                        tbody:{attr:{}},
                        htr:{attr:{class:'header'}},
                        th:{attr:{}},
                        tr:{attr:{}},
                        td:{attr:{}},
                        columns:[ {name:'Pin Number', attr:{width:'15%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, edit:false, filter:false, type:'data', cellType:'text', onclick:this.handleTableEvent},
                                  {name:'Name', attr:{width:'15%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, editable:false, filter:false, type:'data', cellType:'text', onclick:this.handleTableEvent},
                                  {name:'Direction', attr:{width:'15%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, editable:false, filter:false, type:'data', cellType:'text', onclick:this.handleTableEvent},
                                  {name:'Type', attr:{width:'15%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, editable:false, filter:false, type:'data', cellType:'text'},
                                  {name:'Event', attr:{width:'15%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, editable:false, filter:false, type:'data', cellType:'text'},
                                  {name:'Value', attr:{width:'15%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'div-content'}, editable:true, filter:false, type:'data', cellType:'text', onclick:this.openValuePuller},
                                  {name:'Action', attr:{width:'10%'}, headerAttr:{class:'div-content'}, actionAttr:{class:'action'}, editable:false, filter:false, type:'action', cellType:'button', actionName:'Set', onclick:this.handleTableEvent}
                                ]
                       };

  this.createElement = function() {
    var children = [];
    children.push(new Div({attr:{class:'div-well-inv font30'}})
      .addChildren([new Text({attr:{text:'Pins Manager'}})]));

    children.push(new Hr({}));
    children.push(new Div({attr:{class:'div-well font20', style:'overflow: auto; max-height: 70%'}})
      .addChildren([
        new Div({attr:{style:'background-color: white;'}})
          .addChildren([
            new SimpleTable({attr:{}, metadata:this.tableMetadata, data:this.props.data.pins})
          ])
      ])
    );
    children.push(new Hr({}));

    //children.push(new SimpleTable({attr:{}, metadata:this.tableMetadata, data:this.props.data.pins}));
    if (this.pin != null) {
      children.push(this.pin);
    }
    return new Div({attr:{class:'div-container'}})
      .addChildren(children);
  }

  this.onModalClose = function() {
    this.pin = null;
    this.rerender();
  }.bind(this);

  this.onSetPinValue = function(formData) {
    this.props.onSetPinValue(formData);
  }.bind(this);
}
