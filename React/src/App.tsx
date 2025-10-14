import { useMemo, useState } from 'react';
import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';
import DateBox from 'devextreme-react/date-box';
import SelectBox from 'devextreme-react/select-box';
import type { Format } from 'devextreme/localization';
import { employees, items } from './data';
import { formatter, parser } from './utils';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';

const now = new Date();

function App(): JSX.Element {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>('javascript');

  const format: Format = useMemo((): Format => ({
    parser: (val: string) => parser(val, selectedAlgorithm),
    formatter: (val: number | Date) => formatter(val),
  }), [selectedAlgorithm]);

  const editorOptions = useMemo(() => ({
    displayFormat: format,
  }), [format]);

  return (
    <div className="main">
      <SelectBox
        value={selectedAlgorithm}
        onValueChange={setSelectedAlgorithm}
        items={items}
        displayExpr="Text"
        valueExpr="Value"
        width={300}
      />
      <DateBox
        defaultValue={now}
        id="date"
        type="date"
        label="Date with the short year"
        labelMode="outside"
        displayFormat={format}
        width={300}
      />
      <DataGrid
        id="grid"
        dataSource={employees}
        width={400}
        keyExpr="ID"
        showBorders={true}
      >
        <Editing mode="cell" allowUpdating={true} />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="HireDate" dataType="date" editorOptions={editorOptions} width={125} />
      </DataGrid>
    </div>
  );
}

export default App;
