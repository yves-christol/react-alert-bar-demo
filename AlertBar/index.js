import React, { useState, useEffect } from 'react';
import { Subject } from 'rxjs';


const subject = new Subject();

export const alertService = {
    sendMessage: message => subject.next({ text: message }),
    clearMessages: () => subject.next(),
    onMessage: () => subject.asObservable()
};

const AlertBar = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // subscribe to home component messages
        const subscription = alertService.onMessage().subscribe(message => {
            if (message) {
                // add message to local state if not empty
                setMessages(messages => [...messages, message]);
            } else {
                // clear messages when empty message received
                setMessages([]);
            }
        });

        // return unsubscribe method to execute when component unmounts
        return subscription.unsubscribe;
    }, []);

    return (
      <div className="jumbotron">
          <div className="container text-center">
              <div className="row">
                  <div className="col-sm-8 offset-sm-2">
                      {messages.map((message, index) =>
                          <div key={index} className="alert alert-success">{message.text}</div>
                      )}
                  </div>
              </div>
          </div>
      </div>
    );
}

export default AlertBar;