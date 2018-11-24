import { GIF_DATA_ACTIONS } from '../actions';

export default (state = {
  gifData: [],
  gifPaginateData: {},
  favorites: []
}, action) => {
  switch (action.type) {
    case GIF_DATA_ACTIONS.SEARCH_GIFS:
      return { ...state,
        gifData: action.payload.gifData,
        gifPaginateData: action.payload.gifPaginateData
      };
    case GIF_DATA_ACTIONS.APPEND_GIFS:
      return { ...state,
        gifData: [...state.gifData, ...action.payload.gifData],
        gifPaginateData: action.payload.gifPaginateData
      };
    case GIF_DATA_ACTIONS.FAV_GIF:
      return { ...state,
        favorites: action.payload
      };
    default:
      return state
  }
}