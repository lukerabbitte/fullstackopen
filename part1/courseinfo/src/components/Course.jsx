// Course.jsx
import React from 'react';
import Header from './Header';
import Content from './Content';
import Count from './Count';

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    {course.parts.map(part => (
      <Content key={part.id} part={part} />
    ))}
    <Count parts={course.parts} />
  </div>
);

export default Course;