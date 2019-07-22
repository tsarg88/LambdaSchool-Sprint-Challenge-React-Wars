import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWars from './components/StarWars.js'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState()
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      setData(res.data.results);
      console.log('res', res.data.results)
    })
  }, [])
if(!data){
  return <h1>Loading</h1>
}else{
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* <StarWars name={data.name} /> */}
      { data.map(x => <StarWars name={x.name} height={x.height} /> )  }
    </div>
  );
}
  
}

export default App;
