import React, { useEffect } from 'react';
import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  EditButton,
  Create,
  SimpleForm,
  TextInput,
  Edit,
} from 'react-admin';
import { createTheme } from '@material-ui/core/styles';
import { green, orange, purple } from '@material-ui/core/colors';
import { Person as PersonIcon, Home as PropertyIcon } from '@material-ui/icons';
import axios from 'axios';

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

const dataProvider = {
  getList: async (resource, params) => {
    const token = localStorage.getItem('adminToken');

    try {
      let url;

      if (resource === 'properties') {
        url = 'http://localhost:8080/v1/api/property';
      } else {
        url = `http://localhost:8080/v1/api/admin/${resource}`;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        data: response.data,
        total: response.data.length,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
    },
    getOne: async (resource, params) => {
        const token = localStorage.getItem('adminToken');
        const { id } = params;
    
        try {
          let url;
    
          if (resource === 'customers' || resource === 'owners') {
            url = `http://localhost:8080/v1/api/users/${id}`;
          } else if (resource === 'properties') {
            url = `http://localhost:8080/v1/api/property/${id}`;
          } else {
            throw new Error(`Unknown resource: ${resource}`);
          }
    
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          return {
            data: response.data,
          };
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      },
};

const AdminDashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      // Token not found, redirect to login page
      window.location.href = '/admin-login';
    }
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

const CustomersList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <EditButton />
      <ResetPasswordButton />
      <DeactivateButton />
    </Datagrid>
  </List>
);

const OwnersList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <EditButton />
      <ResetPasswordButton />
      <DeactivateButton />
    </Datagrid>
  </List>
);

const PropertiesList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="squareFeetArea" />
      <TextField source="detailOverview" />
      <TextField source="unitAreaPrice" />
      <TextField source="price" />
      <TextField source="propertyType" />
      <TextField source="homeType" />
      <TextField source="numberOfParking" />
      <TextField source="views" />
      <TextField source="builtDate" />
      <TextField source="numberOfBedroom" />
      <TextField source="bathroomCount" />
      <TextField source="businessType" />
      <TextField source="pricePerMonth" />
      <EditButton />
    </Datagrid>
  </List>
);

const PropertiesEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
      <TextInput source="squareFeetArea" />
      <TextInput source="detailOverview" />
      <TextInput source="unitAreaPrice" />
      <TextInput source="price" />
      <TextInput source="propertyType" />
      <TextInput source="homeType" />
      <TextInput source="numberOfParking" />
      <TextInput source="views" />
      <TextInput source="builtDate" />
      <TextInput source="numberOfBedroom" />
      <TextInput source="bathroomCount" />
      <TextInput source="businessType" />
      <TextInput source="pricePerMonth" />
      </SimpleForm>
    </Edit>
  );

const CustomersEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
    </SimpleForm>
  </Edit>
);

const CustomersCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
    </SimpleForm>
  </Create>
);

const OwnersEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
    </SimpleForm>
  </Edit>
);

const OwnersCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
    </SimpleForm>
  </Create>
);

const CustomerIcon = () => <PersonIcon style={{ color: green[500] }} />;
const OwnerIcon = () => <PersonIcon style={{ color: orange[500] }} />;

const DeactivateButton = () => (
  <button
    style={{
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    Deactivate
  </button>
);

const ResetPasswordButton = () => (
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
  >
    Reset Password
  </button>
);

export default AdminDashboard;
