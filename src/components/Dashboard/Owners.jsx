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

const OwnersList = (props) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        <EditButton />
        <ResetPasswordButton record={props.record}/>
        <DeactivateButton resource="owners" />
      </Datagrid>
    </List>
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
  
export {
    OwnersList,
    OwnersEdit,
    OwnersCreate,
  };