import React from "react";
import { Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomPagination({
  totalRecords,
  perPage,
  totalPages,
  maxVisiblePages,
  currentPage,
  onPageChange,
}) {
  const getPageRange = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
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
      onClick={() => onPageChange(1)}
      disabled={currentPage === 1}
    />
  );
  items.push(
    <Pagination.Prev
      key="prev"
      onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      disabled={currentPage === 1}
    />
  );

  for (let page = start; page <= end; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => onPageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  items.push(
    <Pagination.Next
      key="next"
      onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      disabled={currentPage === totalPages}
    />
  );
  items.push(
    <Pagination.Last
      key="last"
      onClick={() => onPageChange(totalPages)}
      disabled={currentPage === totalPages}
    />
  );

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Pagination size="md">{items}</Pagination>
      <p>
        Showing page {currentPage} of {totalPages} (Records: {totalRecords})
      </p>
    </div>
  );
}

export default CustomPagination;
