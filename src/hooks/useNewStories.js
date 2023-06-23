import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewStoriesSuccess, getNewStoriesFailure } from "../actions";
import { HACKER_NEWS_API_BASE_URL } from "./config";

function useNewStories() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchNewStories() {
      try {
        const response = await fetch(
          `${HACKER_NEWS_API_BASE_URL}newstories.json`
        );
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        dispatch(getNewStoriesSuccess(data));
      } catch (error) {
        dispatch(getNewStoriesFailure(error.message));
      }
    }
    fetchNewStories();
  }, [dispatch]);
}

export default useNewStories;
