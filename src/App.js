import {useState } from 'react';
import Header from "./components/common/header";
import HomePage from "./components/pages/home";
import './App.css';

function App() {
  const [newesCata, setNewesCata] = useState("");
  const searchNewsHandler = (id) => {
    setNewesCata(id);
  }
  return (
    <div className="App">
      <Header searchNewsHandler={searchNewsHandler}/>
      <HomePage newesCata={newesCata}/>
    </div>
  );
}

export default App;
