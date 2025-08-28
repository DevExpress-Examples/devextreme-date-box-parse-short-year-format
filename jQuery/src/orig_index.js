$(() => {
  const now = new Date();

  const parseSelectBox = $('#parse-behavior').dxSelectBox({
    width: 300,
    items,
    displayExpr: 'text',
    valueExpr: 'value',
    value: 'javascript',
  }).dxSelectBox('instance');

  $('#date').dxDateBox({
    type: 'date',
    label: 'Date with the short year',
    labelMode: 'outside',
    displayFormat: {
      parser: (val) => parser(val, parseSelectBox.option('value')),
      formatter: (val) => formatter(val),
    },
    value: now,
  });

  $('#grid').dxDataGrid({
    width: 400,
    dataSource: employees,
    keyExpr: 'ID',
    showBorders: true,
    paging: {
      enabled: false,
    },
    editing: {
      mode: 'cell',
      allowUpdating: true,
    },
    columns: [
      'FirstName',
      'LastName', {
        dataField: 'HireDate',
        dataType: 'date',
        editorOptions: {
          displayFormat: {
            parser: (val) => parser(val, parseSelectBox.option('value')),
            formatter: (val) => formatter(val),
          },
        },
        width: 125,
      },
    ],
  });
});
