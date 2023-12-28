import React from 'react';
import { SearchIcon } from './Icons';
type SearchBarProps = {
  searchQuery: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchBar = ({ searchQuery, onChange }: SearchBarProps) => {
  return (
    <div
      style={{
        position: 'relative',
        minWidth: 0,
        width: '100%',
        flexGrow: 1,
        borderRadius: '0.5rem', // rounded-md
        border: 'none',
        paddingLeft: '1.25rem', // px-3.5
        paddingRight: '1.25rem', // px-3.5
        paddingTop: '0.5rem', // py-2
        paddingBottom: '0.5rem', // py-2
        color: '#212529', // text-gray-900
        boxShadow:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // shadow-sm
        outline: '1px solid rgba(46, 46, 46, 0.3)', // ring-1 ring-inset ring-gray-300
      }}
    >
      <SearchIcon
        style={{
          position: 'absolute',
          left: '0.625rem', // left-2.5
          top: '0.75rem', // top-3
          height: '1rem', // h-4
          width: '1rem', // w-4
          color: '#a0a4a8', // text-gray-500
        }}
      />
      <input
        value={searchQuery}
        onChange={onChange}
        style={{
          width: '100%', // w-full
          paddingLeft: '1rem', // pl-4
        }}
        placeholder="Search icons..."
        type="search"
      />
    </div>
  );
};

export default SearchBar;
