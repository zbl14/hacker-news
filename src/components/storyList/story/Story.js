import React from "react";
import useStory from "../../../hooks/useStory";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import styles from "./Story.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const Story = ({ id }) => {
  const { story, isLoading } = useStory(id);

  if (isLoading) {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>Story is deleted</h2>
        </div>
      </div>
    );
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
        <p className={styles.cardBody}>
          <AccountCircleIcon className={styles.iconStyle} />
          <span className={styles.textStyle}>{by}</span>
        </p>
        <p className={styles.cardBody}>
          <AccessTimeIcon className={styles.iconStyle} />
          <span className={styles.textStyle}>
            {formatDistanceToNow(date)} ago
          </span>
        </p>
        <p className={styles.cardBody}>
          <ChatBubbleOutlineIcon className={styles.iconStyle} />
          <span className={styles.textStyle}>{descendants}</span>
        </p>
        <p className={styles.cardBody}>
          <ThumbUpAltIcon className={styles.iconStyle} />
          <span className={styles.textStyle}>{score}</span>
        </p>
      </div>
    </div>
  );
};

Story.propTypes = {
  id: PropTypes.number,
};

export default Story;
