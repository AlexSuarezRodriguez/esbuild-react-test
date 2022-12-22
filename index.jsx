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


globalThis.renderComponent1 = function() {
  ReactDOM.render(<App />,
    document.getElementById('root'),
  );
}