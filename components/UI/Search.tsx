import React, { FocusEvent, useState } from 'react';
import Logo from './Logo';
import Styles from '../../styles/components/layout/Header';
import Router from 'next/router';

const Search = () => {
  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    const parentTarget: HTMLDivElement = e.currentTarget
      .parentNode! as HTMLDivElement;
    parentTarget.classList.toggle('active');
  };

  const [search, setSearch] = useState('');

  const hadleSubmit = () => {
    if (search.trim() === '') return;

    Router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  return (
    <Styles.MainZone>
      <Logo />
      <Styles.Search>
        <input
          type="text"
          placeholder="Search"
          onFocus={handleInputFocus}
          onBlur={e => {
            handleInputFocus(e);
            hadleSubmit();
          }}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => {
            if (e.key.toLowerCase() === 'enter') {
              hadleSubmit();
            }
          }}
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
