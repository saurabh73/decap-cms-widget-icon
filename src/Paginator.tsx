import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';
type PaginatorProps = {
  currentPage: number;
  pageCount: number;
  handlePageClick: (pageNumber: number) => void;
};

const Paginator = ({
  currentPage,
  pageCount,
  handlePageClick,
}: PaginatorProps) => {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  return (
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
            key={`pagination${pageNumber + 1}`}
            style={{
              padding: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              lineHeight: 1, // leading-none
              border: '2px solid transparent',
              borderRadius: '0.25rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              ...(currentPage === pageNumber + 1 && {
                borderColor: '#e0e0e0',
                backgroundColor: '#f8f9fa',
              }),
            }}
            onClick={() => handlePageClick(pageNumber + 1)}
          >
            <span
              style={{
                display: 'block',
                width: '1rem', // w-4
                height: '1rem', // h-4
                verticalAlign: 'middle', // align-middle
              }}
            >
              {pageNumber + 1}
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
  );
};

export default Paginator;
