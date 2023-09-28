import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  )
}

const App = () => { {/* State that was common to both the display and the button were lifted to the lowest possible shared parent.*/}
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  
  return (
    <div>
      <Display counter={counter}/>
      <Button label='Increase by one' onClick={increaseByOne}/>
      <Button label='Decrease by one' onClick={decreaseByOne}/>
      <Button label='Set to zero' onClick={setToZero}/>
    </div>
  )
}

export default App