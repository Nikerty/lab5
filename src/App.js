import logo from "./logo.svg";
import "./App.css";

function App() {
  const greeting = "Это тестовый проект Ведмеденко Е.А.";
  const hope = " Всё работает!"
  const rel = "Добавлен семантический выпуск"
  const vers = 'Это версия 1.0.0'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {greeting}
        {hope}
      </header>
      <div>
      {rel}
      {vers}
      </div>
    </div>
  );
}

export default App;
