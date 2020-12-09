import React, {useState} from 'react';
import './App.css';

import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const initialList = [
  1, 2 ,3
]

function App() {
  const [list, setList] = useState(initialList);

  function incrementNumber(index){
    
    const newList = [...list];
    newList[index]++;
    setList(newList);
  }

  function decrementNumber(index){
    const newList = [...list];
    newList[index]--;
    setList(newList);
  }

  return (
    <div className="App">
      <div>
        <ListItem list={list} incrementNumber={incrementNumber} decrementNumber={decrementNumber}/>
      </div>
       <div>
        <AddItem list={list} setList={setList} />
       </div>
    </div>
  );
}

export default App;
