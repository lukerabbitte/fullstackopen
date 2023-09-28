import { useState } from 'react'

const Clicker = () => {

  const [count, setCount] = useState(0);
    
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Add one</button>
      <button onClick={() => setCount(count-1)}>Subtract one</button>
      <button onClick={() => setCount(count*count)}>Square</button>
      <button onClick={() => setCount(count*count*count)}>Cube</button> {/* Declare event handlers directly. */}
    </div>
  )
}

const Hello = ({ name, age }) => { {/* Don't always have to pass the entire props object in. */}

  const birthYearGuess = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        You were probably born in {birthYearGuess()}.
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Clicker></Clicker>
    </div>
  )
}

export default App