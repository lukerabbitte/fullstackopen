import { useState } from 'react'

const Button = ({ handleClick, counter, label }) => {
  return (
    <div>
      <p>{label}</p>
      <button onClick={handleClick}>
        {counter}
      </button>
    </div>
  )
}

const Stats = ({good, neutral, bad}) => {

  const all = good + neutral + bad
  const average = (good*1 + neutral*0 + bad*-1) / all
  return (
    <div>
      <table>
        <thead>Hello</thead>
        <tbody>
          <tr>
            <td>
              All
            </td>
            <td>
              {all}
            </td>
          </tr>
          <tr>
            <td>
              Average
            </td>
            <td>
              {average}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h4>Give Feedback</h4>
      <Button handleClick = {() => {setGood(good+1)}} counter = {good} label = {'good'} />
      <Button handleClick = {() => {setNeutral(neutral+1)}} counter = {neutral} label = {'neutral'} />
      <Button handleClick = {() => {setBad(bad+1)}} counter = {bad} label = {'bad'} />
      <h4>Stats</h4>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App