import logo from "./logo.svg";
import "./App.css";

function App() {
  const greeting = "Это тестовый проект Ведмеденко Егора Алексеевича.";
  const hope = " Всё работает!"
  const rel = "Добавлен семантический выпуск"
  const commit = 'Commit'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {greeting}
        {hope}
        {rel}
      </header>
    </div>
  );
}

export default App;
