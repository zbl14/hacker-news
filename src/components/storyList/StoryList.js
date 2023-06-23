import React from "react";
import { useSelector } from "react-redux";
import useNewStories from "../../hooks/useNewStories";
import Story from "./story/Story";
import Pagination from "./pagination/Pagination";
import styles from "./StoryList.module.css";

const StoryList = () => {
  useNewStories();
  const newStories = useSelector((state) => state.newStories);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const start = currentPage * itemsPerPage;
  const selectedStories = newStories.slice(start, start + itemsPerPage);

  return (
    <div className={styles.storyListContainer}>
      <div className={styles.grid}>
        {selectedStories.map((id) => (
          <div className={styles.storyContainer} key={id}>
            <Story id={id} />
          </div>
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination />
      </div>
    </div>
  );
};

export default StoryList;
