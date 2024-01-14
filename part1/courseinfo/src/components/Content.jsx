import React from 'react';

const Content = (props) => {

    return (
      <>
        <p>
          {props.part.name} with the amount of {props.part.exercises} exercises.
        </p>
      </>
  
    )
}

export default Content