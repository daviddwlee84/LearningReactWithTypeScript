import './App.css';
import { Greet } from './components/Greet'

// App component
// (type inference)
function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;
