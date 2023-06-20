import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  resetButton: {
    color: 'white',
    backgroundColor: 'purple',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
}));

const PasswordReset = ({ record }) => {
  const classes = useStyles();

  const handleResetPassword = (id) => {
    // Handle password reset logic here
    console.log(`Reset password for ${record.name} with ID ${id}`);
  };

  return (
    <button
      className={classes.resetButton}
      onClick={() => handleResetPassword(record.id)}
    >
      Reset Password
    </button>
  );
};

export default PasswordReset;
