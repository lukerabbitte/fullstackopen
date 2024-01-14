import React from 'react';
import Course from './components/Course';

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
    <div>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
      <Contact fullName='Makira Hirako' />
    </div>
  );
}

const Contact = (props) => {
  
  return (
      <>
      <p>
          {props.fullName} is the instructor.
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

export default App;
