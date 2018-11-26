import { SEARCH_ACTIONS } from '../actions';

export default (state = {
  searchValue: '',
  pageNumber: 1,
  searchError: false
}, action) => {
  switch (action.type) {
    case SEARCH_ACTIONS.UPDATE_SEARCH_VALUE:
      return { ...state,
        searchValue: action.payload
      }
    case SEARCH_ACTIONS.INCREMENT_PAGE_NUMBER:
      return { ...state,
        pageNumber: state.pageNumber + 1
      }
    case SEARCH_ACTIONS.CLEAR_PAGE_NUMBER:
      return { ...state,
        pageNumber: 1
      }
    case SEARCH_ACTIONS.SEARCH_ERROR:
      return { ...state,
        searchError: true
      }
    default:
      return state
  }
}