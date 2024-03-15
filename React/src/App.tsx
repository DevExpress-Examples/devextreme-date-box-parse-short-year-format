import React, { useMemo, useState } from 'react';
import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';
import DateBox from 'devextreme-react/date-box';
import SelectBox from 'devextreme-react/select-box';
import { Format } from 'devextreme/localization';
import { employees, items } from './data';
import { formatter, parser } from './utils';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';

const now = new Date();

function App(): JSX.Element {
  const [value, setValue] = useState('javascript');
  const format: Format = useMemo(() => ({
    parser: (val) => parser(val, value),
    formatter: (val) => formatter(val),
  }), [value]);

  const editorOptions = useMemo(() => format, []);

  return (
    <div className="main">
      <SelectBox
        value={value}
        onValueChange={setValue}
        items={items}
        displayExpr="Text"
        valueExpr="Value"
      />
      <DateBox
        value={now}
        type="date"
        label="Date with the short year"
        displayFormat={format}
      />
      <DataGrid
        id="grid"
        dataSource={employees}
        width={400}
        keyExpr='ID'
        showBorders={true}
      >
        <Editing mode="cell" allowUpdating={true} />
        <Column dataField='FirstName' />
        <Column dataField="LastName" />
        <Column dataField='HireDate' dataType='date' editorOptions={editorOptions} />
      </DataGrid>
    </div>
  );
}

export default App;
