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
      <Button onClick={() => handleClick('success')}>Success </Button>
      <Button onClick={() => handleClick('error')}>Error </Button>
      <Button onClick={() => handleClick('warning')}>Warning </Button>
      <Button onClick={() => handleClick('info')}>Info </Button>
      <Button onClick={() => handleClick('')}>Standard </Button>
    </div>
  );
}

export default AlertComponent;