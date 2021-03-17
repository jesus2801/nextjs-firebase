import React from 'react';
import Styles from '../../styles/components/out/Forms';

const FormInput = ({
  name,
  value,
  label,
  handleChange,
  type,
  ...rest
}: any) => {
  return (
    <Styles.FormGroup>
      <label htmlFor={name}>{label}:</label>
      <div className="input-ctn">
        <input
          type={type}
          placeholder={`Enter your ${name}`}
          id={name}
          value={value}
          onChange={handleChange}
          {...rest}
        />
        <div className="line"></div>
      </div>
    </Styles.FormGroup>
  );
};

export default FormInput;
