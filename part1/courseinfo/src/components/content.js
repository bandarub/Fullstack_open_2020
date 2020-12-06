import React from "react";
import Part from './part'
const Content = ({ parts }) => (
  <div>
    {parts.map((part, key) => (
        <Part key={key} part={part}/>
    ))}
  </div>
);

export default Content;
