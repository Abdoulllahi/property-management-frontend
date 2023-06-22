import React from 'react';
import {
  List,
  Datagrid,
  TextField,
    EditButton,
    SimpleForm,
  TextInput,
    Edit,
} from 'react-admin';

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
  
export {
    PropertiesList,
    PropertiesEdit,
  };