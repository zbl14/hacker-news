import * as c from "../actions/ActionTypes";

const initialState = {
  isLoaded: false,
  newStories: [],
  error: null,
};

export const storyListReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.GET_NEW_STORIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        newStories: action.payload,
        error: null,
      };
    case c.GET_NEW_STORIES_FAILURE:
      return { ...state, isLoaded: true, error: action.payload };
    default:
      return state;
  }
};

export default storyListReducer;
