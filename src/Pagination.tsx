import React, { useMemo, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, SearchIcon } from './Icons';
import { DynamicIcon } from './DynamicIcon';

interface PaginationProps {
  items: string[];
  itemsPerPage?: number;
  iconFamily: string;
  onChangeItem: (icon: string) => void;
}
const Pagination = ({
  items,
  itemsPerPage = 10,
  iconFamily,
  onChangeItem,
}: PaginationProps) => {
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
  // Create the pages array based on pageCount
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleItemChange = (icon: string) => {
    console.log('Clicked', icon);
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
          onChange={handleSearchChange}
          style={{
            width: '100%', // w-full
            paddingLeft: '1rem', // pl-4
          }}
          placeholder="Search icons..."
          type="search"
        />
      </div>
      <div
        style={{
          width: '100%', // w-full
          paddingBottom: '1rem', // pb-4
          borderBottom: '1px solid #e0e0e0', // border-b border-gray-200
          display: 'flex', // items-container
          flexWrap: 'wrap', // items-container
        }}
      >
        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '0.5rem',
          }}
        >
          {currentItems.map(icon => (
            <div
              key={icon}
              onClick={e => {
                e.preventDefault();
                handleItemChange(icon);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '0.5rem',
                border: '2px solid transparent',
                borderRadius: '0.25rem',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                width: '2.25rem', // w-9
                height: '2.25rem', // h-9
              }}
            >
              <DynamicIcon iconLib={iconFamily} iconName={icon} />
            </div>
          ))}
        </section>
      </div>
      {currentItems.length > 0 && (
        <div
          style={{
            width: '100%', // w-full
            paddingBottom: '1rem', // pb-4
            borderBottom: '1px solid #e0e0e0', // border-b border-gray-200
            display: 'flex', // items-container
            flexWrap: 'wrap', // items-container
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <button
              disabled={currentPage === 1}
              style={{
                padding: '0.5rem', // p-2
                fontSize: '0.875rem', // text-sm
                fontWeight: 500, // font-medium
                border: '2px solid transparent', // border-2 border-transparent border-solid
                borderRadius: '0.25rem', // rounded
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
              }}
              onClick={() => handlePageClick(currentPage - 1)}
            >
              <ArrowLeftIcon
                style={{
                  width: '1rem', // Assuming base font size of 16px
                  height: '1rem',
                }}
              />
            </button>

            {pages.map(pageNumber => (
              <button
                key={`pagination` + pageNumber}
                style={{
                  padding: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  lineHeight: 1, // leading-none
                  border: '2px solid transparent',
                  borderRadius: '0.25rem',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                  ...(currentPage === pageNumber && {
                    borderColor: '#e0e0e0',
                    backgroundColor: '#f8f9fa',
                  }),
                }}
                onClick={() => handlePageClick(pageNumber)}
              >
                <span
                  style={{
                    display: 'block',
                    width: '1rem', // w-4
                    height: '1rem', // h-4
                    verticalAlign: 'middle', // align-middle
                  }}
                >
                  {pageNumber}
                </span>
              </button>
            ))}

            <button
              disabled={currentPage === pageCount}
              style={{
                padding: '0.5rem', // p-2
                fontSize: '0.875rem', // text-sm
                fontWeight: '500', // font-medium
                border: '2px solid transparent', // border-2 border-transparent border-solid
                borderRadius: '0.25rem', // rounded
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
              }}
              onClick={() => handlePageClick(currentPage + 1)}
            >
              <ArrowRightIcon
                style={{
                  width: '1rem', // Assuming base font size of 16px
                  height: '1rem',
                }}
              />
            </button>
          </div>
        </div>
      )}
      {pages.length <= 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
          }}
        >
          <span>No Icons Found</span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
