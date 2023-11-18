
import actionType from "../actions/actionType";
const initState = {
    searchData: [],
    keyword: ""
}
const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SEARCH:
            return {
                searchData: action.payload,
                keyword: action.keyword
            }

        default:
            return state
    }
}
export default searchReducer;