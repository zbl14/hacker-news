import { useState, useEffect } from "react";
import { HACKER_NEWS_API_BASE_URL } from "./config";

const useStory = (id) => {
  const [story, setStory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(
          `${HACKER_NEWS_API_BASE_URL}item/${id}.json`
        );
        const data = await response.json();

        if (data.deleted) {
          setStory(null);
        } else {
          setStory(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  return { story, isLoading };
};

export default useStory;
