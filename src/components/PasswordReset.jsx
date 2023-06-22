import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

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
  const [open, setOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResetPassword = () => {
    // Handle password reset logic here
    console.log(`Reset password for ${record.name} with ID ${record.id}`);
    console.log('New password:', newPassword);

    // Close the dialog
    handleClose();
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  return (
    <>
      <button className={classes.resetButton} onClick={handleOpen}>
        Reset Password
      </button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Reset Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="New Password"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleResetPassword} color="primary">
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PasswordReset;
