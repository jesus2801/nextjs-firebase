import React, { FocusEvent } from 'react';
import Logo from './Logo';
import Styles from '../../styles/components/layout/Header';

const Search = () => {
  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    const parentTarget: HTMLDivElement = e.currentTarget
      .parentNode! as HTMLDivElement;
    parentTarget.classList.toggle('active');
  };

  return (
    <Styles.MainZone>
      <Logo />
      <Styles.Search>
        <input
          type="text"
          placeholder="Search"
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
        />
        <object
          data="/static/icons/search.svg"
          type="image/svg+xml"
        ></object>
      </Styles.Search>
    </Styles.MainZone>
  );
};

export default Search;
