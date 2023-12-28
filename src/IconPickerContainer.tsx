import React, { useMemo, useState } from 'react';
import SearchBar from './SearchBar';
import IconGrid from './IconGrid';
import Paginator from './Paginator';
import NoResultsMessage from './NoResultsMessage';

type IconPickerContainerProps = {
  items: string[];
  itemsPerPage?: number;
  iconFamily: string;
  onChangeItem: (icon: string) => void;
};
const IconPickerContainer = ({
  items,
  itemsPerPage = 10,
  iconFamily,
  onChangeItem,
}: IconPickerContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    // Filter items based on searchQuery
    return searchQuery === ''
      ? items
      : items.filter(item => item.toLowerCase().includes(searchQuery));
  }, [items, searchQuery]);

  const pageCount = useMemo(() => {
    // Calculate page count based on filtered items
    return Math.ceil(filteredItems.length / itemsPerPage);
  }, [filteredItems, itemsPerPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleItemChange = (icon: string) => {
    onChangeItem(icon);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1rem',
      }}
    >
      <SearchBar searchQuery={searchQuery} onChange={handleSearchChange} />
      <IconGrid
        iconFamily={iconFamily}
        items={currentItems}
        onChange={handleItemChange}
      />
      {currentItems.length > 0 && (
        <Paginator
          currentPage={currentPage}
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        />
      )}
      {currentItems.length <= 0 && <NoResultsMessage />}
    </div>
  );
};

export default IconPickerContainer;
