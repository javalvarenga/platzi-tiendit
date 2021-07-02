import React from 'react';
import { ErrorMessage,useField } from 'formik';
import '../styles/components/TextField.css'
// eslint-disable-next-line import/prefer-default-export
export const TextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);

//   console.log("field:", field);
//   console.log("meta:", meta);

  return (
    <div className="inputContainer">
      <input type="text" placeholder={field.name} 
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...field} {...props}
      autoComplete="off"
    className={ `${meta.touched && meta.error && 'is-invalid'} `}
      />
    <ErrorMessage component="div" className="errorMessage" name={field.name}/>
    </div>
  );
};
