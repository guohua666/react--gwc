import React from 'react';
import {BrowserRouter,Switch} from 'react-router-dom'
import MapRoute from './router/MapRoute'
import route from './router'
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Switch>
         <MapRoute route={route}></MapRoute>
         </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
