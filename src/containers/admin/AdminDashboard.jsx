import React, { useEffect } from 'react';
import {
  Admin,
  Resource,
} from 'react-admin';
import { createTheme } from '@material-ui/core/styles';
import { green, orange, purple } from '@material-ui/core/colors';
import { Person as PersonIcon, Home as PropertyIcon } from '@material-ui/icons';
import { CustomersEdit, CustomersList, CustomersCreate } from '../../components/Dashboard/Customers';
import { OwnersCreate, OwnersEdit, OwnersList } from '../../components/Dashboard/Owners';
import { PropertiesEdit, PropertiesList } from '../../components/Dashboard/Properties';
import dataProvider from '../../components/Dashboard/dataProvider';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#0c10d4',
    },
  },
});

const AdminDashboard = () => {
  useEffect(() => {
 localStorage.getItem('adminToken');
  }, []);

  return (
    <Admin theme={theme} dataProvider={dataProvider}>
      <Resource
        name="customers"
        list={CustomersList}
        edit={CustomersEdit}
        create={CustomersCreate}
        icon={CustomerIcon}
      />
      <Resource
        name="owners"
        list={OwnersList}
        edit={OwnersEdit}
        create={OwnersCreate}
        icon={OwnerIcon}
      />
          <Resource
              name="properties"
              list={PropertiesList}
              edit={PropertiesEdit}
              icon={PropertyIcon} />
    </Admin>
  );
};

const CustomerIcon = () => <PersonIcon style={{ color: green[500] }} />;
const OwnerIcon = () => <PersonIcon style={{ color: orange[500] }} />;
export default AdminDashboard;
