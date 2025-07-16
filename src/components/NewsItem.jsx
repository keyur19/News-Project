import React from "react";
import defaultImage from "./default.jpeg"
function NewsItem(props){
    // destructuring
    let {desc, title, imageURL, newsUrl, sourceName } = props;
    const getImageURL = (url) => {
        // Check if url is valid and a non-empty string
        return (url && typeof url === 'string' && url.trim() !== '') ? url : defaultImage;
    };
    return(
        <div>
            <div className="card my-3">
                {/* first put image tag in src we put props.imageURL */}
                
                <img className="card-img-top" src = {getImageURL(imageURL)} alt="newsplease" />
                <div className="card-body">
                    {/* get title */}
                    <h5 className="card-title">{title}</h5>
                    <p className="w-100 fs-6 text-body-secondary text-end">- {sourceName}</p>
                    <p className="card-text">{desc}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm"> Read More...</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem;