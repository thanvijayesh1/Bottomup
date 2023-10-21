import './App.css';
import { useState, useCallback } from 'react'; 
import { data } from './data';
import NestedCheckBox from './nestedCheckBox';
import { deepCopy, updateChildValuesByParentLabel, setParentValue } from './utitls';

function App() {
  const [updateData, setUpdateData] = useState(deepCopy(data));

  const updateValueCheckBox = useCallback((value, child) => {
    const updatedData = deepCopy(updateChildValuesByParentLabel(updateData, child, value, false));
    setUpdateData(deepCopy(setParentValue(updatedData)));
  }, [updateData]); 

  return (
    <div className="App">
      <NestedCheckBox
        data={updateData}
        handleCheckBoxClick={updateValueCheckBox}
      />
    </div>
  );
}

export default App;
