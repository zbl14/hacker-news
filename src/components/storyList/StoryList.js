import React from "react";
import { useSelector } from "react-redux";
import useNewStories from "../../hooks/useNewStories";
import Story from "./story/Story";

const StoryList = () => {
  useNewStories();
  const newStories = useSelector((state) => state.newStories);

  return (
    <div>
      {newStories.map((id) => (
        <div key={id}>
          <Story id={id} />
        </div>
      ))}
    </div>
  );
};

export default StoryList;
