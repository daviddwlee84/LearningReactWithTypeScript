import './App.css';
import { Greet } from './components/Greet'

// App component
// (type inference)
function App() {
  return (
    <div className="App">
      <Greet name='Vishwas' messageCount={10} isLoggedIn={true} />
    </div>
  );
}

export default App;
