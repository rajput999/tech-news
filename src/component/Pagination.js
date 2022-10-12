import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () =>{
    const { page, nbPages, getNextPage, getPrevPage} =useGlobalContext();
    return(
        <>
        <div className="Pagination_btn">
            <button onClick={() => getPrevPage()}>PREV</button>
            <p>
                {page + 1} of {nbPages}
            </p>
            <button onClick={() => getNextPage()}>NEXT</button>
        </div>
        </>
    );
}

export default Pagination;