import React, { useState, useEffect } from 'react';
import { Subject } from 'rxjs';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const subject = new Subject();

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

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
        {messages.map((message, index) =>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {message.text}
            </Alert>
          </Snackbar>
        )}
      </div>
    );
}

export default AlertBar;