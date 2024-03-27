import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Mona Burger and is{" "}
            <a
              href="https://github.com/MonaBurger/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
