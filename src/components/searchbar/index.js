import React from 'react';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify/icons-akar-icons/search';

const SearchBar = ({value,handleClick,onChange,onSubmit,formColor,inputColor}) => {

  return (
    <form onSubmit={onSubmit} className={formColor}>
      <div>
        <Icon icon={searchIcon} color="#5966f4" height="30" />
        <input className={inputColor} type='text' id='search-bar' placeholder='Search Github username...' value={value} onChange={onChange}/>
      </div>
      <button type='button' onClick={handleClick}>Search</button>
    </form>
  )
}

export default SearchBar;
