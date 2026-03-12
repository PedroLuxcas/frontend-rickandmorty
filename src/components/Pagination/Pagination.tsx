import React from 'react';
import * as S from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <S.Container>
      <S.Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </S.Button>

      {currentPage > 3 && <S.Dots>...</S.Dots>}
      
      {getPageNumbers().map(page => (
        <S.Button
          key={page}
          onClick={() => onPageChange(page)}
          $active={page === currentPage}
        >
          {page}
        </S.Button>
      ))}
      
      {currentPage < totalPages - 2 && <S.Dots>...</S.Dots>}

      <S.Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </S.Button>
    </S.Container>
  );
};

export default Pagination;