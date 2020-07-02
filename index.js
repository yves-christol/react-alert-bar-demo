import React from 'react';
import { render } from 'react-dom';
import { SnackbarProvider } from 'notistack';
import AlertComponent from './AlertComponent'

function App() {
  return (
    <div>
      <h1>AlertBar demo</h1>
      <AlertComponent />
    </div>
  )
}

render( 
  <SnackbarProvider maxSnack={3}>
      <App />
  </SnackbarProvider>,
  document.getElementById('root')
);