import React, {useState, useEffect} from "react";
import NewsItem from "./NewsItem";
// import { Image } from "react-bootstrap";
// import Img1 from "./Img1";
import Img1 from "./Img1";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props){
    // main thing that we give in App
    let category = props.category;
    let [articles, setArticles] = useState([]);
    let [totalResults, setTotalResults] = useState(0);
    let [page, setPage] = useState(1);

    // make api call and set the category
    let resultNews = async () =>{
        const url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;

        // proper call
        let data = await fetch(url);
        // convert to json key value pair
        let parsedData = await data.json();
        // setArticles is our function parseddata is json and we set articles of that json have
        // now we saw them these artcles(to user)
        setArticles(parsedData.articles);
        // we set totalResults to parsedData's totalresults
        setTotalResults(parsedData.totalResults);
    } ;
    useEffect(() => {
        // we write this () after function because we have to seen them directly one home page (might)
        resultNews();
    }, []);

    let fetchData = async() => {
        // call api and give them category and page (+1) number
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page + 1}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
        setPage(page + 1);

        let data = await fetch(url);
        // convert data to json key value pair
        let parsedData = await data.json();
        // concat means first all articles are stored  and add these all articles
        setArticles(articles.concat((parsedData.articles)));
    };
    const paraStyle = {
        color:"hotpink",
        fontSize: "28px",
        fontWeight:"bold",
        fontFamily:"arial sans-serif"
    }
    return(
        <InfiniteScroll
        //This is important field to render the next data
        dataLength = {articles.length}
        // this is set for next for now there is first useEffect
        next = {fetchData}
        hasMore = {articles.length < totalResults}
        loader = {<h4 className="text-center">Loading..</h4>}
        endMessage = {<p style={{textAlign:"center"}}><b>Yay! You Have Seen It All</b></p>}
        >

            <div className="container my-3">
                <div className="row">
                
                <p style={paraStyle}>Stay Trendy, Stay Informed!</p>
                    {/* map through all elements */}
                    {articles.map((element) => {
                        return(
                            // articles array have one object that we put name to element  and we want that elements url
                            <div className="col-md-4" key={element.url}> 
                                <NewsItem
                                // element have another object and we want name of them
                                    sourceName = {element.source.name}
                                    // element.title
                                    title = {element.title}
                                    //element.desc
                                    desc = {element.desc}
                                    // image is availiable then saw otherwise show image
                                    imageURL = {element.urlToImage ? element.urlToImage : Img1}
                                    // element.url
                                    newsUrl = {element.url} 
                                />
                             </div>
                        )
                    })}
                </div>
            </div>

         </InfiniteScroll>
    )
}

export default News;