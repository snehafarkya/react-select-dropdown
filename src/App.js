import logo from './logo.svg';
import './App.css';
import SelectDropdown from './selectDropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>This is the illustration of React-Select dropdown component. It allows you to customise according to your preferences.</h4>
        <SelectDropdown/>
        <div className="footer">
          <h5>Connect with me here: <a href="https://linktr.ee/sneha_farkya">Sneha Farkya</a> </h5>
        </div>
      </header>
    </div>
  );
}

export default App;
