import * as React from 'react';
import './App.css';
import { SpellBook } from './components/spellBook/spellBook';

class App extends React.Component {
  public render() {
    return (
      
      <div className="App">
        <SpellBook></SpellBook>
      </div>
    );
  }
}

export default App;
