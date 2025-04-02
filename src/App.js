import picture from './picture.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{height: "60vh", width:  "10%",}}>
          <img src={picture} className="App-Profilepic" alt="Picture" />
        </div>
        <h1>
          this is my portfolio
        </h1>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;