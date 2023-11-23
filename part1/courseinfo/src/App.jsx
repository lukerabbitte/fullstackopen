const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 11
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts[0]} />
      <Content part={course.parts[1]} />
      <Content part={course.parts[2]} />
      <Contact fullName='Makira Hirako' />
      <Count parts={course.parts} />
    </div>
  )
}

{/* Card description={course.description} */}

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
      <p>
        {props.part.name} with the amount of {props.part.exercises} exercises.
      </p>
    </>

  )
}

const Count = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </>
  )
}

// Each react component is a function
const Contact = (props) => {
  console.log("Processing contact");
  console.log(`Contact = ${props.fullName}`)
  
  return (
    <>
      <p>
        {props.fullName} is the instructor.
      </p>
    </>
  )
}

export default App;
