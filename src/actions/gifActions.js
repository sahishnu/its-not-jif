import { GIF_DATA_ACTIONS, SEARCH_ACTIONS } from '../actions';

export function toggleFavGif (gif) {
  return (dispatch, getState) => {
    const currentState = getState();
    const currentGifState = currentState.gifReducer;
    const currentFavorites = currentGifState.favorites;

    const filteredFavs = currentFavorites.filter(e => e.id !== gif.id);
    if (filteredFavs.length === currentFavorites.length) {
      gif.isFav = true;
      filteredFavs.push(gif);
    }
    dispatch({type: GIF_DATA_ACTIONS.FAV_GIF, payload: filteredFavs});
  }
}

export function clearGifData () {
  return (dispatch) => {
    dispatch({ type: SEARCH_ACTIONS.UPDATE_SEARCH_VALUE, payload: ''});
    dispatch({ type: GIF_DATA_ACTIONS.SEARCH_GIFS, payload: { gifData: [], gifPaginateData: {} } });
  }
}
