import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent';

function App() {
  let time = [1,2,3,4,'i',5]
  return(
    <div>
      {time.map(()=>{
      return <FirstComponent />
    })}
    </div>
    
  )
}
export default App;
