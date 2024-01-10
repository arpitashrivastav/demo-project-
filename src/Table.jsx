import {
  Search,
  Sort,
  Download,
  Dropdown,
  LeftArrow,
  RightArrow,
  DownArrow,
} from "./svgIcons";
import data from "./data.json";
import { useMemo, useState } from "react";

const LIMIT = 20;

function paginate(data, itemsPerPage, currentPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
}

export default function DbTable() {
  const [dbTableSearch, setTableDbSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage <= data.length) {
      setCurrentPage(newPage);
    }
  };

  const totalPages = Math.ceil(data.length / LIMIT);

  const paginatedData = paginate(data, LIMIT, currentPage);

  const filterPaginatedData = paginatedData.filter((order) =>
    order.orderId.toString().includes(dbTableSearch.trim())
  );

  const renderPageNumbers = () => {
    const getClassName = (pageNumber) =>
      `font3 pageNumBtn ${pageNumber == currentPage ? "activePageNum" : ""}`;

    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    if (totalPages <= 10) {
      return pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          // disabled={pageNumber === currentPage}
          className={getClassName(pageNumber)}
        >
          {pageNumber}
        </button>
      ));
    } else {
      // Display ellipsis and the last 10 pages
      const visiblePages = ["..."];
      for (let i = totalPages - 9; i <= totalPages; i++) {
        visiblePages.push(i);
      }

      const notFirstOrLast = currentPage != 1 && currentPage < totalPages - 9;

      return (
        <>
          <button
            className={getClassName("1")}
            onClick={() => handlePageChange(1)}
            // disabled={1 === currentPage}
          >
            1
          </button>
          {notFirstOrLast && (
            <>
              {currentPage != 2 ? "..." : ""}
              <button
                className={getClassName(currentPage)}
                onClick={() => handlePageChange(currentPage)}
              >
                {currentPage}
              </button>
            </>
          )}
          {visiblePages.map((item, index) => (
            <button
              className={getClassName(item)}
              key={index}
              onClick={() =>
                handlePageChange(typeof item === "number" ? item : currentPage)
              }
            >
              {typeof item === "string" ? item : item}
            </button>
          ))}
        </>
      );
    }
  };

  return (
    <div className="table-container">
      <div className="table-filter">
        <div className="input ">
          <Search height="14" width="14" />
          <input
            value={dbTableSearch}
            onChange={(e) => setTableDbSearch(e.target.value)}
            className="border-light font3"
            placeholder="Search by order ID..."
          />
        </div>
        <div className="filter-right">
          <button className="sort font5 border-light">
            Sort <Sort width="16" height="16" />
          </button>
          <button className="download border-light">
            <Download width="20" height="20" />
          </button>
        </div>
      </div>
      <div className="db-table">
        <div className="db-table-head">
          <div className="db-table-cell align-left">Order ID</div>
          <div className="db-table-cell align-left">
            Order date <DownArrow />
          </div>
          <div className="db-table-cell alight-right">Order amount</div>
          <div
            className="db-table-cell align-right"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "2px",
            }}
          >
            Transaction fees
            <img src="/assets/info.png" />
          </div>
        </div>

        {filterPaginatedData.map(
          ({ orderId, orderDate, orderAmount, transactionFees }) => (
            <div key={orderId} className="db-table-row">
              <div className="db-table-cell align-left blue">#{orderId}</div>
              <div className="db-table-cell align-left">{orderDate}</div>
              <div className="db-table-cell alight-right">{orderAmount}</div>
              <div className="db-table-cell align-right">{transactionFees}</div>
            </div>
          )
        )}
      </div>
      <div className="table-pagination">
        <button
          className="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <LeftArrow width="18" height="18" />
          Previous Page
        </button>
        <div className="pageNums">{renderPageNumbers()}</div>
        <button
          className="next"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next Page
          <RightArrow width="18" height="18" />
        </button>
      </div>
    </div>
  );
}
