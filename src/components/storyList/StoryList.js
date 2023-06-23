import React from "react";
import { useSelector } from "react-redux";
import useNewStories from "../../hooks/useNewStories";

const StoryList = () => {
  useNewStories();
  const newStories = useSelector((state) => state.newStories);
  // console.log(newStories);

  return (
    <div>
      {newStories.map((id) => (
        <div key={id}>
          <p>{id}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
