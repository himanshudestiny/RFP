import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomPagination({}) {
  const totalRecords = 516;
  const perPage = 10;
  const totalPages = Math.ceil(totalRecords / perPage); 
  const maxVisiblePages = 10;
  const [activePage, setActivePage] = useState(1);

  const getPageRange = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, activePage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return { start, end };
  };
  const { start, end } = getPageRange();
  const items = [];  
  items.push(
    <Pagination.First
      key="first"
      onClick={() => setActivePage(1)}
      disabled={activePage === 1}
    />
  );
  items.push(
    <Pagination.Prev
      key="prev"
      onClick={() => setActivePage((prev) => Math.max(1, prev - 1))}
      disabled={activePage === 1}
    />
  );
  for (let page = start; page <= end; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === activePage}
        onClick={() => setActivePage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }
  items.push(
    <Pagination.Next
      key="next"
      onClick={() => setActivePage((prev) => Math.min(totalPages, prev + 1))}
      disabled={activePage === totalPages}
    />
  );
  items.push(
    <Pagination.Last
      key="last"
      onClick={() => setActivePage(totalPages)}
      disabled={activePage === totalPages}
    />
  );

  return (
    <div>
      <Pagination size="sm">{items}</Pagination>
      <p>
        Showing page {activePage} of {totalPages} (Records: {totalRecords})
      </p>
    </div>
  );
}

export default CustomPagination;