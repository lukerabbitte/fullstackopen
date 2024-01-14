const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        },
        {
          name: 'Syntax',
          exercises: 9,
          id: 3
        },
        {
          name: 'Trouble',
          exercises: 12,
          id: 4
        }
      ]
    }
  ]

  return (
    courses.map(course => (
      <div>
        <Header course={course.name} />
        {course.parts.map(part => (
          <Content part={part} />
        ))}
        <Contact fullName='Makira Hirako' />
        <Count parts={course.parts} />
      </div>
    ))
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

  /*
  // The long form of the reduce syntax
  const count2 = parts.reduce((acc, cur) => {
    acc += cur.exercises
    return acc
  }, 0)
  */

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
