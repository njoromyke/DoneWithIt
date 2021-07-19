import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import {
  AppForm,
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email' },
  { label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'lock' },
  { label: 'Pencil', value: 4, backgroundColor: 'yellow', icon: 'pencil' },
  { label: 'Pen', value: 5, backgroundColor: 'orange', icon: 'pen' },
  { label: 'Book', value: 6, backgroundColor: 'pink', icon: 'book' },
  { label: 'Laptop', value: 7, backgroundColor: 'gold', icon: 'laptop' },
  { label: 'Trash', value: 8, backgroundColor: 'gray', icon: 'trash-can' },
  { label: 'bed', value: 9, backgroundColor: 'black', icon: 'bed' },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name='title' placeholder='Title' />
        <FormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
          width={120}
        />
        <Picker
          nuberOfColumns={3}
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          name='category'
          width={'50%'}
          placeholder='Category'
        />
        <FormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
