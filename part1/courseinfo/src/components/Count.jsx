import React from 'react';

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

export default Count