import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  placeholder,
  width,
  nuberOfColumns,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        width={width}
        items={items}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        nuberOfColumns={nuberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
