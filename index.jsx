import React from "react"
import ReactDOM from 'react-dom';
import Table from './table';

function App() {
  return (
    <>
      <h1>Esto es una prueba</h1>
      <Table />
      </>
  )
}

function renderComponent1() {
  ReactDOM.render(<App />,
  document.getElementById('root'),
);
}