function SimpleTable(props) {
  Element.call(this, props);

  this.createElement = function() {
    var metadata = this.props.metadata;
    var tablePops = metadata != null && metadata.table != null ? metadata.table : {attr:{}};
    var tableBodyPops = metadata != null && metadata.tbody != null ? metadata.tbody : {attr:{}};
    var headerRowProps = metadata != null && metadata.htr != null ? metadata.htr : {attr:{}};
    var headerColProps = metadata != null && metadata.th != null ? metadata.th : {attr:{}};
    var rowProps = metadata != null && metadata.tr != null ? metadata.tr : {attr:{}};
    var colProps = metadata != null && metadata.td != null ? metadata.td : {attr:{}};

    var headers = [];
    var columnsCount = metadata != null && metadata.columns != null ? metadata.columns.length : 0;
    if (columnsCount == 0) {
      for (var key in this.props.data[0]) {
        headers.push(new HeaderCell(headerColProps).addChildren([new Text({attr:{text:key.toUpperCase()}})]));
        columnsCount++;
		  }
    } else {
      metadata.columns.forEach(function(column) {
        var props = {attr:headerColProps.attr};
        Object.assign(props.attr, column.attr);
        headers.push(new HeaderCell(props).addChildren([new Div({attr:column.headerAttr}).addChildren([new Text({attr:{text:column.name}})])]));
      }.bind(this));
    }

    var rows = [];
    rows.push(new Row(headerRowProps).addChildren(headers));
    this.props.data.forEach(function(row) {
      var rowEl = new Row(rowProps);
      var cols = [];
      var keys = Object.keys(row);
      if (metadata.columns != null) {
        var k = 0;
        for (var i = 0; i < metadata.columns.length; i++) {
          var p = JSON.parse(JSON.stringify(colProps));
          Object.assign(p.attr, metadata.columns[i].attr);
          p['row'] = row;
          if (metadata.columns[i].onclick != null) {
            p['onclick'] = metadata.columns[i].onclick;
          }

          p['actionAttr'] = metadata.columns[i].actionAttr;
          p.attr['text'] = metadata.columns[i].type == 'data' ? row[keys[k]] : p.attr['text'] = metadata.columns[i].actionName;
          p['key'] = metadata.columns[i].type == 'data' ? keys[k++] : metadata.columns[i].name;
          p['cellType'] = metadata.columns[i].cellType;

          cols.push(new ActionCell(p));
        }
      } else {
        for (var key in row) {
          var p = JSON.parse(JSON.stringify(colProps));
          p.attr['text'] = row[key];
          cols.push(new ActionCell(p));
        }
      }
      rowEl.addChildren(cols);
      rows.push(rowEl);
    }.bind(this));

    var table = new Table(tablePops).addChildren(
        [
          new TableBody(tableBodyPops).addChildren(rows)
        ]);
  	return table;
  }
}
