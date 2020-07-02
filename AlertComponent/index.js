import React from 'react';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';

const AlertComponent = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = (variant) => {
      enqueueSnackbar('I love hooks', {variant: variant});
  };

  return (
    <div>
      <Button onClick={() => handleClick('success')}>Success snackbar</Button>
      <Button onClick={() => handleClick('error')}>Error snackbar</Button>
      <Button onClick={() => handleClick('warning')}>Warning snackbar</Button>
      <Button onClick={() => handleClick('info')}>Info snackbar</Button>
    </div>
  );
}

export default AlertComponent;