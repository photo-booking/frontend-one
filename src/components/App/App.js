import logo from '../../images/logo.svg';
import './App.css';
import Maps from '../Map/Map.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Maps />
      </header>
    </div>
  );
}

export default App;
