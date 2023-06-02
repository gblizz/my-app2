import { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Another from './Another';

function App() {
  //added per Laracast tutorial.----------

  //counter, requires 'import useState'
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  //local CSS example from Laracast
  const someStyle = {
    background: 'red',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
  };
  //----------------------------------------

  return (
    <div className="App">
      <header className="App-header">
        <Another name="Garrett" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>{count}</div>
          {/*decrement and increment buttons added per Laracast course*/}
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <div class="flex-container">
            <form>
              <label for="loginName">Login ID: </label>
              <input type="text" id="loginName" name="loginName"></input>
              <br></br>
              <label for="loginPass}">Password: </label>
              <input type="text" id="loginPass" name="loginPass"></input>
            </form>
          </div>
        </p>
        <form action="https://www.merakimedaesthetics.com">
          <button type="submit">Log In</button>
        </form>
        {/*this portion is to show JSX combined with the local CSS capabilities*/}
        {true && <p style={someStyle}>{3 + 2}</p>}
      </header>
    </div>
  );
}

export default App;
