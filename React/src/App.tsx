import React from 'react';
import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';
import DateBox from 'devextreme-react/date-box';
import { Format } from 'devextreme/localization';
import { employees } from './data';
import { formatter, parser } from './utils';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';

const now = new Date();

const format: Format = {
  parser: (val) => parser(val),
  formatter: (val) => formatter(val),
};

const editorOptions: { displayFormat: Format } = {
  displayFormat: {
    parser: (val) => parser(val),
    formatter: (val) => formatter(val),
  },
};

function App(): JSX.Element {
  return (
    <div className="main">
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
        <Column dataField='BirthDate' dataType='date' editorOptions={editorOptions} />
      </DataGrid>
    </div>
  );
}

export default App;
