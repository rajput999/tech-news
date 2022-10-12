const reducer = (state, action) => {
    switch(action.type){
        case "SET_LOADING" : 
            return {
                ...state,
                isLoading:true,
            }

        case "GET_STORIES" :
            return {
                ...state,
                hits: action.payload.hits,
                isLoading:false,
                nbPages: action.payload.nbPages,
            };
        case "Remove_Post" :
            return{
                ...state,
                hits : state.hits.filter(
                    (curElem) => curElem.objectID !== action.payload
                ),
                };
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload,
            };
        case "nextPage": 
        let pageNum = state.page +1 ;
        if(pageNum >= state.nbPages){
            pageNum=50
        }
        return{
            ...state,
            page : pageNum,
        };
        case "prevPage": 
        let pageNumDec = state.page -1;
        if(pageNumDec<=0){
            pageNumDec = 0
        }
        return{
            ...state,
            
            page : pageNumDec
        };
    }

    return state;
};

export default reducer;