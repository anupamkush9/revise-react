
import { Fragment } from "react";

function App() {

  return (
    <>
      <h2>Fragment in React Js</h2>
      <table>
        <thead>
          <tr>
            <td>Roll No</td>
            <td>Name</td>
            <td>marks</td>
          </tr>
        </thead>

        <tbody>
          <TableBody></TableBody>
          <TableBodyShort/>
        </tbody>
      </table>
    </>
  )
}

function TableBody() {
  const fragment_rows = [
    [1, 'Anupam', 92],
    [2, 'Raj', 85],
    [3, 'Vikram', 78]
  ];

  return (
    <Fragment>
      {fragment_rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </Fragment>
  );
}

function TableBodyShort() {
  const rows = [
    [4, 'Virat', 88],
    [5, 'Abhishek', 65],
    [6, 'Hardik', 78]
  ];

  return (
    <>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default App
