import React, {useEffect, useState} from 'react'
import NewsItems from "./NewsItems";
import newsComponents from "./newsComponents.module.css";
import Loading from "./Loading";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponents = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const[totalResults, settotalResults] = useState(0)
  
    // document.title =`${propsCapatalize(props.category)} - Bharat News`;
  

    const Capatalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const  updatenews = async() =>{
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=7e6a409ecb514d4e85f5cd7ea5e13aaf&pagesize=10&page=${page}`;
      setLoading(true);
      let data = await fetch(url);
      let newsdata = await data.json();
      // console.log(newsdata);
      setArticles(newsdata.articles)
      settotalResults(newsdata.totalResults)
      setLoading(false)
    }

    useEffect(()=> {
      updatenews();
    },[])
    
  
    const fetchMoreData = async() => {
      setPage(page + 1);
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=7e6a409ecb514d4e85f5cd7ea5e13aaf&pagesize=10&page=${
        page+1
      }`;
      let data = await fetch(url);
      let newsdata = await data.json();
      // console.log(newsdata);
      setArticles(articles.concat(newsdata.articles))
      settotalResults(newsdata.totalResults)

    };

  return (
      <>
      <div className={newsComponents.maindiv}>
        <h1 className={newsComponents.title}> {Capatalize(props.category)} News by Bharat News</h1> 
        {loading && <Loading/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.lenght !== totalResults}
          // loader={<Loading/>}
        >
        <div className={newsComponents.container}>
          {articles.map((element) => {
            return <div className={newsComponents.element} key={element.url}>
                <NewsItems
                  title={
                    !element.title ? element.title : element.title.slice(0, 45)
                  }
                  description={element.description}
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://as1.ftcdn.net/v2/jpg/01/98/04/52/1000_F_198045217_XX6x4ll5Ov4thdKEpS7Ebn0DEJZHuN8I.jpg"
                  }
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source}
                  
                />
              </div>
            
          })}
        </div>
        </InfiniteScroll>
        
        </div>
      </>
    );
  
}

NewsComponents.defaultProps = {
  category:'genral'
}

NewsComponents.propsType = {
  category: PropTypes.string,
}

export default NewsComponents
