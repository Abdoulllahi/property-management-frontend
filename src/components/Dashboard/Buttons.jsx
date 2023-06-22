import React, { useState } from 'react';
import axios from 'axios';
import { useRecordContext } from 'react-admin';

const ResetPasswordButton = () => {
    const record = useRecordContext();
  
    const handleResetPassword = async () => {
      if (!record || !record.id) {
        console.error('Record or record id is undefined');
        return;
      }
  
      const token = localStorage.getItem('adminToken');
      const url = `http://localhost:8080/v1/api/admin/users/${record.id}/reset-password`;
      const newPassword = prompt('Enter a new password:');
  
      try {
        await axios.post(
          url,
          { newPassword },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert('Password reset successfully!');
      } catch (error) {
        console.error('Error resetting password:', error);
        alert('Failed to reset password.');
      }
    };
  
    return (
      <button
        style={{
          backgroundColor: 'purple',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginLeft: '8px',
        }}
        onClick={handleResetPassword}
      >
        Reset Password
      </button>
    );
};
const DeactivateButton = () => {
    const record = useRecordContext();
    const [isDeactivated, setIsDeactivated] = useState(false);
  
    const handleDeactivate = async () => {
      if (!record || !record.id) {
        console.error('Record or record id is undefined');
        return;
      }
  
      const confirmAction = isDeactivated
        ? 'Are you sure you want to activate this user?'
        : 'Are you sure you want to deactivate this user?';
  
      const confirmActionVerb = isDeactivated ? 'activate' : 'deactivate';
  
      const confirmed = window.confirm(confirmAction);
      if (!confirmed) return;
  
      const token = localStorage.getItem('adminToken');
      const url = `http://localhost:8080/v1/api/admin/users/${record.id}/reset-password`;
  
      try {
        const newPassword = isDeactivated ? 'WELCOME' : 'GO AWAY';
        await axios.post(
          url,
          { newPassword },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsDeactivated(!isDeactivated);
        console.log(`User ${confirmActionVerb}d successfully!`);
        alert(`User ${confirmActionVerb}d successfully!`);
      } catch (error) {
        console.error(`Error ${confirmActionVerb}ing user:`, error);
      }
    };
  
    return (
      <button
        style={{
          backgroundColor: isDeactivated ? 'green' : 'red',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={handleDeactivate}
      >
        {isDeactivated ? 'Activate' : 'Deactivate'}
      </button>
    );
  };
    
export  { DeactivateButton, ResetPasswordButton };