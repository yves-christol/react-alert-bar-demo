import React from 'react';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';

const AlertComponent = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love hooks');
    };

    return (
        <Button onClick={handleClick}>Show snackbar</Button>
    );
}

export default AlertComponent;