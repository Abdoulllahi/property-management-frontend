import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    Edit,
    EditButton,
    Create,
    ArrayField,
    SingleFieldList,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const OwnersList = (props) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ArrayField source="name">
          <SingleFieldList>
            <TextField source="name" />
          </SingleFieldList>
        </ArrayField>
        <EditButton />
      </Datagrid>
    </List>
  );

export const OwnersEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const OwnersCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);
