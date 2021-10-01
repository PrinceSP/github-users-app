import React from 'react';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify/icons-akar-icons/search';

const SearchBar = ({value}) => {
  return (
    <form>
      <div>
        <Icon icon={searchIcon} color="#5966f4" height="30" />
        <input type='text' id='search-bar' placeholder='Search Github username...' value={value}/>
      </div>
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar;
