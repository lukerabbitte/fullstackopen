const App = () => {
  const course = 'Half Stack application development';

  const parts = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Count exercises1={parts.exercises1} exercises2={parts.exercises2} exercises3={parts.exercises3} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part name={props.parts.part1} exercises={props.parts.exercises1}/>
      <Part name={props.parts.part2} exercises={props.parts.exercises2}/>
      <Part name={props.parts.part3} exercises={props.parts.exercises3}/>
    </>

  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.name} with the amount of {props.exercises} exercises.
      </p>
    </>
  )
}

const Count = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  )
}

export default App;
