import logo from "./logo.svg";
import "./App.css";
import { PruebaComponente } from "./components/PruebaComponente";
import { AjaxComponent } from "./components/AjaxComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebaComponente />
        <AjaxComponent />
      </header>
    </div>
  );
}

export default App;
