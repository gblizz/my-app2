import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
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
      </header>
    </div>
  );
}

export default App;
