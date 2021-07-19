import { Formik } from 'formik';
import React from 'react';

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
