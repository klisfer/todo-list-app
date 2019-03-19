import { VisibilityFilters } from '../actions';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL , action) => {
    switch (action.filter) {
      case "SET_VISIBILITY_FILTER":
        return action.filter;
      default:
        return state;
    }
}



export default visibilityFilter;