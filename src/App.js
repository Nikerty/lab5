import logo from "./logo.svg";
import "./App.css";

function App() {
  const greeting = "Это тестовый проект Ведмеденко Егора Алексеевича";
  const hope = "/n Всё работает"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {greeting}
        {hope}
      </header>
    </div>
  );
}

export default App;
