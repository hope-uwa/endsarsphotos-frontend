import React from 'react';
import {Button as MButton} from '@material-ui/core';

const Button = ({variant, loading, label, btnClass, onClick}) => {
  return (
    <MButton variant={variant} className={btnClass || ''} onClick={onClick} >
      {loading ? '' : label}
    </MButton>
  );
};

export default Button;
