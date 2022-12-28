import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [totalResults, settotalResults] = useState(0);
  const [page, setpage] = useState(1);
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, [])
  const updateNews = async () => {
    props.setProgress(20)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${props.page}&pagesize=${props.pagesize}`;
    setloading(true)
    let data = await fetch(url)
    props.setProgress(60)
    let parseData = await data.json();
    props.setProgress(80)
    setarticles(parseData.articles)
    settotalResults(parseData.totalResults)
    setloading(false)
    props.setProgress(100)



  }
  const fetchMoreData = async () => {

    setpage(page + 1)

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    // setloading(true)

    let data = await fetch(url)
    props.setProgress(20)
    let parseData = await data.json();
    props.setProgress(40)

    setarticles(parseData.articles.concat(parseData.articles))
    props.setProgress(60)
    settotalResults(parseData.totalResults)
    props.setProgress(80)
    // setloading(false)
    props.setProgress(100)



  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  return (
    <>
      <h1 className="text-center">Top {capitalizeFirstLetter(props.category)} HeadLines</h1>
      {loading && <Spinner />}

      <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                    
                > 
                  
        <div className="container">

          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} urlToImage={element.urlToImage ? element.urlToImage : "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463__480.jpg"} url={element.url} publishedAt={element.publishedAt} author={element.author} name={element.source.name} />

              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )

}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
