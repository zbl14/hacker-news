import React from "react";
import { useSelector } from "react-redux";
import useNewStories from "../../hooks/useNewStories";
import Story from "./story/Story";
import Pagination from "./pagination/Pagination";

const StoryList = () => {
  useNewStories();
  const newStories = useSelector((state) => state.newStories);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const start = currentPage * itemsPerPage;
  const selectedStories = newStories.slice(start, start + itemsPerPage);

  return (
    <div>
      <div>
        {selectedStories.map((id) => (
          <div key={id}>
            <Story id={id} />
          </div>
        ))}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default StoryList;
