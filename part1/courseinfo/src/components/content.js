import React from "react";

const Content = ({ parts }) => (
  <div>
    {parts.map((part, key) => (
      <p key={key}>
        {part.name} {part.exercises}
      </p>
    ))}
  </div>
);

export default Content;
