import searchGifsAPI from '../apis/searchAPI';
import { SEARCH_ACTIONS, GIF_DATA_ACTIONS } from '../actions';

export function searchGifsAction (loadMore) {
  return async (dispatch, getState) => {

    if (loadMore) {
      dispatch({ type: SEARCH_ACTIONS.INCREMENT_PAGE_NUMBER });
    } else {
      dispatch({ type: SEARCH_ACTIONS.CLEAR_PAGE_NUMBER });
    }

    const currentState = getState();
    const searchReducerData = currentState.searchReducer;
    const currentPageValue = searchReducerData.pageNumber;
    const currentSearchValue = searchReducerData.searchValue;
    const gifData = await searchGifsAPI(currentSearchValue, currentPageValue);

    if (loadMore) {
      dispatch({ type: GIF_DATA_ACTIONS.APPEND_GIFS, payload: { gifData: gifData.data, gifPaginateData: gifData.pagination } });
    } else {
      dispatch({ type: GIF_DATA_ACTIONS.SEARCH_GIFS, payload: { gifData: gifData.data, gifPaginateData: gifData.pagination } });
    }
  };
};

export function updateSearchValueAction (event) {
  return (dispatch) => {
    dispatch({type: SEARCH_ACTIONS.UPDATE_SEARCH_VALUE, payload: event.target.value});
  }
}