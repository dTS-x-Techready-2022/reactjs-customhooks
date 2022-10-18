import logo from "./logo.svg";
import "./App.css";
import { useCounter, useFetcher } from "./components/utils/hooks-custom";

function App() {
  const { counter, setCounter } = useCounter();
  const { data } = useFetcher();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Now Counter is {counter}</p>
        <p>{data?.title}</p>
        <button onClick={(_) => setCounter(counter)}>Update Counter</button>
      </header>
    </div>
  );
}

export default App;
