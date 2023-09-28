import { useState } from 'react'

const Clicker = () => {

  const [count, setCount] = useState(0);

  const operations = {
    'addOne': () => setCount(count + 1),
    'subtractOne': () => setCount(count - 1),
    'square': () => setCount(count * count),
    'cube': () => setCount(count * count * count)
  };
    
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={operations['addOne']}>Add one</button>
      <button onClick={operations['subtractOne']}>Subtract one</button>
      <button onClick={operations['square']}>Square</button>
      <button onClick={operations['cube']}>Cube</button>
    </div>
  )
}

const Hello = (props) => {

  const birthYearGuess = () => {
    const yearNow = new Date().getFullYear();
    return (yearNow - props.age);
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
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