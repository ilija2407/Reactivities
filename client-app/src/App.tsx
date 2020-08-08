import React from 'react';
import logo from './logo.svg';
import './App.css';
import './CarItem';

import { cars } from './demo';

function App() {
  return (
    <div className="App">

    <ul>
      {cars.map ((car) => (

        <CarItem c/>
      ))}
    </ul>
    </div>
  );
}

export default App;
