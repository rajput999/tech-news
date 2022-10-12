import React, { useContext, useReducer , useEffect } from "react";
// import { Reducer } from "react";
import reducer from "./reducer";

const initialState = {
    isLoading : true,
    query: "html",
    nbPages:0,
    page:0,
    hits:[],
};

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    let isLoading = true;

    let API = "http://hn.algolia.com/api/v1/search?";

    const fecthApiData = async (url) => {
        dispatch({type: "SET_LOADING"});

        try{
            const res = await fetch(url);
            const data = await res.json();
            isLoading = false;
            dispatch({
                type : "GET_STORIES",
                payload : {
                    hits : data.hits,
                    nbPages : data.nbPages,
                }
            })
            console.log(data);
        }
        catch(err){
            console.log(err); 
        }
    };

    useEffect( () => {
        fecthApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query,state.page]);

    const remove_post =(Post_Id) =>{
        dispatch({
            type : "Remove_Post",
            payload : Post_Id,
        })
    }

    const searchPost = (searchQuery) =>{
        dispatch({
            type:"SEARCH_QUERY",
            payload : searchQuery,
        })
    }

    const getNextPage =()=>{
        dispatch({
            type : "nextPage"
        })
    }
    const getPrevPage =()=>{
        dispatch({
            type : "prevPage"
        })
    }

    return (
        <AppContext.Provider value={{...state,remove_post,searchPost, getNextPage, getPrevPage}}>
            {children}
        </AppContext.Provider>
    );
};

// custom hook create
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider , useGlobalContext};