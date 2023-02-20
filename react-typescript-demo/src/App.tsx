import './App.css';
import { Greet } from './components/Greet'
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';

// App component
// (type inference)
function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    // <div className="App">
    //   <Greet name='Vishwas' messageCount={10} isLoggedIn={true} />
    //   <Person name={personName} />
    //   <PersonList names={nameList} />
    // </div>
    <div className='App'>
      <Status status='error' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name='Vishwas' isLoggedIn={true} />
    </div>
  );
}

export default App;
