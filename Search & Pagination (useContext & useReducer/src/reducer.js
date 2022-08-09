const reducer = (state, action) => {
    switch(action.type){
        case "GET_STORIES":
            return{
                ...state, 
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: false
            }
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            }    
        case "REMOVE_POST":
            return{
                ...state,
                hits: state.hits.filter(currentPost => currentPost.objectID !== action.payload)
            }    
        case "SEARCH_POST":
            return{
                ...state,
                query: action.payload
            }    
        case "NEXT_PAGE":
            let pageNum = state.page + 1
            if(pageNum >= state.nbPages){
                pageNum = 0
            }

            return{
                ...state,
                page: pageNum 
            }    
        case "PREV_PAGE":
            let pageNo = state.page
            if(pageNo <= 0){
                pageNo = 0;
            }else {
                pageNo = pageNo - 1
            }
            return{
                ...state,
                page: pageNo
            }    
    }
    return state
}

export default reducer