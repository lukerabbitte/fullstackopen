import { useState } from 'react'

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ onClick, label}) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}

const OtherButton = (props) => {
  return (
    <button onClick={props.onClick}>
      {Math.pow(2, props.incrementer)}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        Start by pressing some buttons!
      </div>
    )
  }
  return (
    <div>
      <p>Button Press History: {props.allClicks.join(' ')}</p>
      <p>Button Press Count: {props.allClicks.length}</p>
    </div>
  )
}

const App = () => { {/* State that was common to both the display and the button were lifted to the lowest possible shared parent.*/}
  const [ counter, setCounter ] = useState(0)
  const [incrementer, setIncrementer] = useState(0) /* Note that we could encapsulate this state into a more complex data structure, however this could be at
                                                        the expense of readability. We can't mutate state directly and so we have to copy all previous state
                                                        object into a new one and overwrite. The spread syntax helps us in cases where we need to make a direct
                                                        copy of an existing object. */
  
  const [allClicks, setAll] = useState([])  
  
  const handleIncreaseByOne = () => {
    setCounter(counter + 1)
    setAll(allClicks.concat('+')) /* Main reason why concat is used here is that it returns copy rather than mutating directly. */
    console.log(allClicks)
  }

  const handleDecreaseByOne = () => {
    setCounter(counter - 1)
    setAll(allClicks.concat('-'))
    console.log(allClicks)
  }

  const handleSetToZero = () => {
    setCounter(0)
    setAll([])
  }

  const exponent = () => setIncrementer(incrementer + 1)
  
  return (
    <div>
      <Display counter={counter}/>
      <OtherButton incrementer={incrementer} onClick={exponent} />
      <Button label='Increase by one' onClick={handleIncreaseByOne}/> {/* Good idea here to not just write an event handler into the JSX component itself. */}
      <Button label='Decrease by one' onClick={handleDecreaseByOne}/>
      <Button label='Start from zero' onClick={handleSetToZero}/>

      <History allClicks={allClicks}/>
    </div>
  )
}

export default App