import React from 'react';
import './App.css';
import DataList from './compn/Data'; 
function App() {
  const items = ['elaaf', 'salma', 'sara'];

  return (
    <div className="App">
        <h1>Hello</h1>
      
      <DataList items={items} />
    </div>
  );
}

export default App;
