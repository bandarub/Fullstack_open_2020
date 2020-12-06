import React from "react";

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <p>
        {part.name} {part.exercises}
      </p>
    ))}
  </div>
);

export default Content;
