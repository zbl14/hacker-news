import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, setItemsPerPage } from "../../../actions/index";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const newStories = useSelector((state) => state.newStories);

  const totalPages = Math.ceil(newStories.length / itemsPerPage);
  const [gotoPage, setGotoPage] = useState(1);

  const handleClick = (page) => {
    dispatch(setCurrentPage(page));
    window.scrollTo(0, 0);
  };

  const handleItemsChange = (e) => {
    dispatch(setItemsPerPage(Number(e.target.value)));
  };

  const handleGotoPage = () => {
    let page = Number(gotoPage) - 1;
    if (page >= 0 && page < totalPages) {
      handleClick(page);
    }
  };

  const createPageNumbers = () => {
    let pageNumbers = [];
    let start = Math.max(currentPage - 5, 0);
    let end = Math.min(start + 10, totalPages);

    for (let i = start; i < end; i++) {
      pageNumbers.push(i + 1);
    }

    return pageNumbers;
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick(0)} disabled={currentPage === 0}>
          First
        </button>
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>

        {createPageNumbers().map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num - 1)}
            style={{
              backgroundColor: num - 1 === currentPage ? "blue" : "white",
            }}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
        <button
          onClick={() => handleClick(totalPages - 1)}
          disabled={currentPage === totalPages - 1}
        >
          Last
        </button>
      </div>

      <div>
        <select value={itemsPerPage} onChange={handleItemsChange}>
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
        <input
          type="number"
          value={gotoPage}
          onChange={(e) => setGotoPage(e.target.value)}
          min="1"
          max={totalPages}
        />
        <button onClick={handleGotoPage}>Go</button>
      </div>
    </div>
  );
};

export default Pagination;
