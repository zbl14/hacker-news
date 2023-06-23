import * as c from "./ActionTypes";

export const getNewStoriesSuccess = (stories) => ({
  type: c.GET_NEW_STORIES_SUCCESS,
  payload: stories,
});

export const getNewStoriesFailure = (error) => ({
  type: c.GET_NEW_STORIES_FAILURE,
  payload: error,
});
