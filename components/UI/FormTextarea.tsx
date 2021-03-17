import React from 'react';
import Styles from '../../styles/components/out/Forms';

const FormTextarea = ({
  name,
  value,
  handleChange,
  label,
  ...rest
}: any) => {
  return (
    <Styles.FormGroup>
      <label htmlFor={name}>{label}:</label>
      <div className="input-ctn">
        <textarea
          id={name}
          value={value}
          placeholder={`Enter your ${name}`}
          onChange={handleChange}
          {...rest}
        ></textarea>
        <div className="line"></div>
      </div>
    </Styles.FormGroup>
  );
};

export default FormTextarea;
