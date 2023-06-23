import * as actions from "./../../actions";
import * as c from "./../../actions/ActionTypes";

describe("top stories reducer actions", () => {
  it("getNewStoriesSuccess should create GET_NEW_STORIES_SUCCESS action", () => {
    const newStories = ["An article"];
    expect(actions.getNewStoriesSuccess(newStories)).toEqual({
      type: c.GET_NEW_STORIES_SUCCESS,
      payload: newStories,
    });
  });

  it("getNewStoriesFailure should create GET_NEW_STORIES_FAILURE action", () => {
    const error = "An error";
    expect(actions.getNewStoriesFailure(error)).toEqual({
      type: c.GET_NEW_STORIES_FAILURE,
      payload: error,
    });
  });

  it("setCurrentPage should create SET_CURRENT_PAGE action", () => {
    const currentPage = 2;
    expect(actions.setCurrentPage(currentPage)).toEqual({
      type: c.SET_CURRENT_PAGE,
      payload: currentPage,
    });
  });

  it("setItemsPerPage should create SET_ITEMS_PER_PAGE action", () => {
    const itemsPerPage = 24;
    expect(actions.setItemsPerPage(itemsPerPage)).toEqual({
      type: c.SET_ITEMS_PER_PAGE,
      payload: itemsPerPage,
    });
  });
});
