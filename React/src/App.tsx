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
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('javascript');
  const format: Format = useMemo(() => ({
    parser: (val) => parser(val, selectedAlgorithm),
    formatter: (val) => formatter(val),
  }), [selectedAlgorithm]);

  const editorOptions = useMemo(() => format, []);

  return (
    <div className="main">
      <SelectBox
        value={selectedAlgorithm}
        onValueChange={setSelectedAlgorithm}
        items={items}
        displayExpr="Text"
        valueExpr="Value"
      />
      <DateBox
        value={now}
        id="date"
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
