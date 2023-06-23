import React from "react";
import useStory from "../../../hooks/useStory";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

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
    <div>
      <h2>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h2>
      <p>By {by}</p>
      <p>{descendants} Comments</p>
      <p>Likes: {score}</p>
      <p>Posted: {formatDistanceToNow(date)} ago</p>
    </div>
  );
};

Story.propTypes = {
  id: PropTypes.number,
};

export default Story;
