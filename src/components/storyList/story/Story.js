import React from "react";
import useStory from "../../../hooks/useStory";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import styles from "./Story.module.css";

const Story = ({ id }) => {
  const { story, isLoading } = useStory(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!story) {
    return <p>Story is deleted</p>;
  }

  const { by, descendants, title, score, time, url } = story;
  const date = new Date(time * 1000);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <p className={styles.cardBody}>By {by}</p>
        <p className={styles.cardBody}>
          Posted: {formatDistanceToNow(date)} ago
        </p>
        <p className={styles.cardBody}>{descendants} Comments</p>
        <p className={styles.cardBody}>{score} Likes</p>
      </div>
    </div>
  );
};

Story.propTypes = {
  id: PropTypes.number,
};

export default Story;
