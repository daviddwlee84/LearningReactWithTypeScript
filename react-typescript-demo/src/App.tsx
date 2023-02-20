import './App.css';
// import { Greet } from './components/Greet'
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Button } from './components/Button';
import { Input } from './components/Input';
// import { Container } from './components/Container';

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
    // <div className='App'>
    //   <Status status='error' />
    //   <Heading>Placeholder text</Heading>
    //   <Oscar>
    //     <Heading>Oscar goes to Leonardo Dicpario!</Heading>
    //   </Oscar>
    //   <Greet name='Vishwas' isLoggedIn={true} />
    // </div>
    // <div className='App'>
    //   {/* <Button handleClick={() => {
    //     // You will be able to see this in F12 developer tools
    //     console.log('Button clicked')
    //   }} /> */}
    //   {/* <Button handleClick={(event) => {
    //     console.log('Button clicked', event)
    //   }} /> */}
    //   <Button handleClick={(event, id) => {
    //     console.log('Button clicked', id, event)
    //   }} />
    //   <Input value='' />
    //   <Input value='' handleChange={(event) => console.log(event)} />
    // </div>
    // <div className='App'>
    //   <Container styles={{ border: '1px solid black', padding: '1rem'}} />
    // </div>
    <div className='App'>
      <Person name={personName} />
      <Input value='' handleChange={(event) => console.log(event)} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
