import * as c from "../../actions/ActionTypes";
import storyListReducer from "../../reducers/storyListReducer";

describe("reducer", () => {
  const initialState = {
    isLoaded: false,
    newStories: [],
    error: null,
  };

  it("returns the initial state when an action type is not passed", () => {
    const newState = storyListReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("handles GET_NEW_STORIES_SUCCESS action", () => {
    const stories = ["36442328", "36442312"];
    const newState = storyListReducer(initialState, {
      type: c.GET_NEW_STORIES_SUCCESS,
      payload: stories,
    });
    expect(newState).toEqual({
      ...initialState,
      isLoaded: true,
      newStories: stories,
      error: null,
    });
  });

  it("handles GET_NEW_STORIES_FAILURE action", () => {
    const newState = storyListReducer(initialState, {
      type: c.GET_NEW_STORIES_FAILURE,
      payload: "error",
    });
    expect(newState).toEqual({
      ...initialState,
      isLoaded: true,
      error: "error",
    });
  });
});
