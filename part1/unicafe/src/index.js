import React, { useState } from "react";
import ReactDOM from "react-dom";
// components
const Button = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};
const Statistic = ({ text, value }) => (
  <td>
    {text} {value}
  </td>
);
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good + 0 - bad) / all;
  const positive = (good / all) * 100 + "%";
  const fields = [
    {
      text: "good",
      value: good,
    },
    {
      text: "neutral",
      value: neutral,
    },
    {
      text: "bad",
      value: bad,
    },
    {
      text: "all",
      value: all,
    },
    {
      text: "average",
      value: average,
    },
    {
      text: "positive",
      value: positive,
    },
  ];
  return (
    <tbody>
      {fields.map((field, key) => (
        <tr key={key}>
          <Statistic text={field.text}  value={field.value} />
        </tr>
      ))}
    </tbody>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setTotal] = useState(0);
  const handleClickForNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(all + 1);
  };
  const handleClickForBad = () => {
    setBad(bad + 1);
    setTotal(all + 1);
  };
  const handleClickForGood = () => {
    setGood(good + 1);
    setTotal(all + 1);
  };
  const renderFeedbackSection = () => {
    return (
      <div>
        <Button onClick={handleClickForGood} title="good" />
        <Button onClick={handleClickForNeutral} title="neutral" />
        <Button onClick={handleClickForBad} title="bad" />
      </div>
    );
  };

  return (
    <div>
      <h3>give feedback</h3>
      {renderFeedbackSection()}
      <p>statistics</p>
      <table>
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <tbody>
            <tr>
              <td>No feedback given</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
