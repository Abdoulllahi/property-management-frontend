import React from 'react';
import { Admin, Resource, List, Datagrid, TextField, EditButton, Create, SimpleForm, TextInput, Edit } from 'react-admin';
import { createTheme } from '@material-ui/core/styles';
import { green, orange, purple } from '@material-ui/core/colors';
import { Person as PersonIcon } from '@material-ui/icons';
import PasswordReset from '../../components/PasswordReset';

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

// Define your fake data
const customers = [
  { id: 1, name: 'Customer 1' },
  { id: 2, name: 'Customer 2' },
];

const owners = [
  { id: 1, name: 'Owner 1' },
  { id: 2, name: 'Owner 2' },
];

// Custom data provider for fetching the data
const dataProvider = {
  getList: (resource, params) => {
    return Promise.resolve({
      data: resource === 'customers' ? customers : owners,
      total: resource === 'customers' ? customers.length : owners.length,
    });
  },
};

const AdminDashboard = () => {
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
    </Admin>
  );
};

const CustomersList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
      <PasswordReset />
    </Datagrid>
  </List>
);

const OwnersList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
      <PasswordReset />
    </Datagrid>
  </List>
);

const CustomersEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

const CustomersCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

const OwnersEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

const OwnersCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

const CustomerIcon = () => <PersonIcon style={{ color: green[500] }} />;
const OwnerIcon = () => <PersonIcon style={{ color: orange[500] }} />;

export default AdminDashboard;
