import logo from './logo.svg';
import './App.css';
import { USER_IDS_TO_FETCH } from './consts'

// Server's base URL is: http://localhost:3001/api
// Path for the Users endpoint: /users/:id
// fetch user with specific Id URL: http://localhost:3001/api/users/:userId

function App() {
  // Modify here
  const userIds = USER_IDS_TO_FETCH;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
