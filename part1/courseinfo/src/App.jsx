const App = () => {
  const course = {  // could change to account for arbitrary number of courses
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
      <SymmetricDiff />
    </div>
  )
}

{/* Card description={course.description} */}

const Header = (props) => {

  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <>
      <p>
        {props.part.name} with the amount of {props.part.exercises} exercises.
      </p>
    </>

  )
}

const Count = ({ parts }) => {

  const count = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
      <p>
        {count}
      </p>
    </>
  )
}

const SymmetricDiff = () => {

  const arrs = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]

  const symDiff = arrs.reduce( (acc, cur) => {

    cur.forEach((value) => {
      acc.has(value) ? acc.delete(value) : acc.add(value); // turns out the dude online is an idiot. This is way simpler!
    })

    return acc;

  }, new Set())

  console.log('SymDiff result', symDiff)

  return (
    <>
      <p>
        {symDiff}
      </p>
    </>
  )
}

// Each react component is a function
const Contact = (props) => {
  
  return (
    <>
      <p>
        {props.fullName} is the instructor.
      </p>
    </>
  )
}

export default App;
