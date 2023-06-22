import React from 'react';
import axios from 'axios';
import { useRecordContext } from 'react-admin';
import dataProvider from './dataProvider';

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
          backgroundColor: 'blue',
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

const DeactivateButton = ({ resource }) => {
    const record = useRecordContext();
  
    const handleDeactivate = async () => {
      if (!record || !record.id) {
        console.error('Record or record id is undefined');
        return;
      }
  
      const confirmDeactivate = window.confirm('Are you sure you want to deactivate this user?');
      if (!confirmDeactivate) return;
  
      try {
        const response = await dataProvider.deactivateOne(resource, { id: record.id });
        console.log('User deactivated:', response.data);
      } catch (error) {
        console.error('Error deactivating user:', error);
      }
    };
  
    return (
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={handleDeactivate}
      >
        Deactivate
      </button>
    );
};
  
export {
    ResetPasswordButton,
    DeactivateButton,
  };