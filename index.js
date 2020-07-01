import React from 'react';
import { render } from 'react-dom';
import AlertBar from './AlertBar';
import { alertService } from './AlertBar'

function sendMessage() {
    // send message to subscribers via observable subject
    alertService.sendMessage('Message from Home Page Component to App Component!');
}

function clearMessages() {
    // clear messages
    alertService.clearMessages();
}

render( 
  <div>
    <h1>AlertBar demo</h1>
    <button onClick={sendMessage} className="btn btn-primary mr-2">Send Message</button>
    <button onClick={clearMessages} className="btn btn-secondary">Clear Messages</button>                
    <AlertBar />
  </div>,
  document.getElementById('root')
);