import { GIF_DATA_ACTIONS } from '../actions';

export default (state = {
  gifData: [],
  gifPaginateData: {},
  favorites: [],
  loading: false,
  searchError: false
}, action) => {
  switch (action.type) {
    case GIF_DATA_ACTIONS.SEARCH_GIFS:
      return { ...state,
        gifData: action.payload.gifData,
        gifPaginateData: action.payload.gifPaginateData,
        loading: false
      };
    case GIF_DATA_ACTIONS.APPEND_GIFS:
      return { ...state,
        gifData: [...state.gifData, ...action.payload.gifData],
        gifPaginateData: action.payload.gifPaginateData,
        loading: false
      };
    case GIF_DATA_ACTIONS.FAV_GIF:
      return { ...state,
        favorites: action.payload
      };
    case GIF_DATA_ACTIONS.LOADING_START:
      return { ...state,
        loading: true,
        searchError: false
      }
    case GIF_DATA_ACTIONS.SEARCH_ERROR:
      return { ...state,
        searchError: true,
        loading: false
      }
    default:
      return state
  }
}