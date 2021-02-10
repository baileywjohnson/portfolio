import Display from './components/Display'
import Navigation from './components/Navigation'

import './App.css'

function App() {
  return (
    <div className="App">
      <div id="navContainer"><Navigation /></div>
      <div id="dispContainer"><Display /></div>
    </div>
  );
}

export default App;
