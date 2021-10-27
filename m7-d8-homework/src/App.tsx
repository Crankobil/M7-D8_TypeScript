import {} from "react-bootstrap"
import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import MyNavBar from "./components/MyNavBar";



function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <header className="App-header">
        <SearchPage/>
      </header>
    </div>
  );
}

export default App;
