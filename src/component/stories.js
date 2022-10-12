import React,{useEffect} from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
    const { hits, isLoading,remove_post } = useGlobalContext();

    if(isLoading){
        return(
            <>
            <h1 className="loading">Loading...</h1>
            </>
        )
    }

    return(
        <>
        {/* <h2 className="h2"> My Tech News post</h2> */}
        {
            hits.map((curPost) => {
                const { title, author , objectID, url, num_comments } = curPost;
                return (
                    <>
                        <div className="card" key={objectID}>
                            <h2 className="title">{title}</h2>
                            <p>
                                By<span> {author} </span>| <span>{num_comments} </span>Comments
                            </p>
                            <div className="card-button">
                                <a href={url} target="blank" className="read_More">Read More</a>
                                <a href="#" target="blank" className="remove" onClick={()=>remove_post(objectID)}>Remove</a>
                            </div>
                        </div>
                    </>
                );
            })
        }
        </>
    );
};

export default Stories;