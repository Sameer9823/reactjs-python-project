import "./App.css";

import FruitList from "./components/Fruis";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Fruit Management System</h1>
        </header>
        <main>
          <FruitList />
        </main>
      </div>
    </>
  );
}

export default App;
