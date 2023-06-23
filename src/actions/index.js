import * as c from "./ActionTypes";

export const getNewStoriesSuccess = (stories) => ({
  type: c.GET_NEW_STORIES_SUCCESS,
  payload: stories,
});

export const getNewStoriesFailure = (error) => ({
  type: c.GET_NEW_STORIES_FAILURE,
  payload: error,
});

export const setCurrentPage = (page) => ({
  type: c.SET_CURRENT_PAGE,
  payload: page,
});

export const setItemsPerPage = (items) => ({
  type: c.SET_ITEMS_PER_PAGE,
  payload: items,
});
