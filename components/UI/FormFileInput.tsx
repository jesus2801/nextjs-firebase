import React from 'react';
import Styles from '../../styles/components/out/Forms';
import helpers from '../../functions/index';

const FormFileInput = ({ handleChange, accept }: any) => {
  return (
    <Styles.FileInputCtn>
      <label htmlFor="file" onClick={helpers.createRipple}>
        File
      </label>
      <p id="file-text">No file selected</p>
      <input type="file" id="file" onChange={handleChange} accept={accept} />
    </Styles.FileInputCtn>
  );
};

export default FormFileInput;
