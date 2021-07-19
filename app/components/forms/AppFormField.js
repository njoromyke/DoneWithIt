import { useFormikContext } from 'formik';
import React from 'react';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        width={width}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      {<ErrorMessage error={errors[name]} visible={touched[name]} />}
    </>
  );
};

export default AppFormField;
