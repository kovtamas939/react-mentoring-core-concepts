import React from 'react'
import SearchForm from './components/SearchForm/SearchForm';
import Counter from './components/Counter/Counter';
import GenreToggle from './components/GenreToggle/GenreToggle';
import Separator from './components/Separator/Separator';

import './App.css';

const myHeader = React.createElement('h1', { className: 'Hello-world'}, 'Hello World!' )

function App() {
  return (
    <div className="App">
        {myHeader}
        <Separator></Separator>
        <SearchForm></SearchForm>
        <Separator></Separator>
        <Counter></Counter>
        <Separator></Separator>
        <GenreToggle></GenreToggle>
      </div>
  );
}

export default App;
