import React from 'react'
import { SearchInput } from './style';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
  return (
    <SearchInput>
      <MdSearch className='search-icons' size='1.3em' />
      <input type="text" placeholder='type to search ' onChange={(e) => handleSearchNote(e.target.value)} />
    </SearchInput>
  )
}

export default Search