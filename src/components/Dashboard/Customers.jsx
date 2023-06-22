import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Create,
    SimpleForm,
    TextInput,
    Edit,
} from 'react-admin';
import { ResetPasswordButton, DeactivateButton } from './Buttons';

const CustomersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EditButton />
            <ResetPasswordButton />
            <DeactivateButton resource="customers" />
        </Datagrid>
    </List>
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

export {
    CustomersList,
    CustomersEdit,
    CustomersCreate,
  };