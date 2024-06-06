import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          “All that is gold does not glitter,<br/>
          Not all those who wander are lost;<br/>
          The old that is strong does not wither,<br/>
          Deep roots are not reached by the frost.<br/>
          <br/>
          From the ashes a fire shall be woken,<br/>
          A light from the shadows shall spring;<br/>
          Renewed shall be blade that was broken,<br/>
          The crownless again shall be king.”<br/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
