import React, { Component } from 'react'
import newsItem from './newsItems.module.css'

const NewsItems = (props) => {

    let {title, description, imageurl, newsurl, author, date, source} = props
    return (
      <>
      <div className={newsItem.source}> {!source.name ? "Unknown" : source.name}</div>
      <div className={newsItem.container}>
        <img className={NewsItems.image} src={imageurl} width="100%" height="40%" alt='...'/>
        <h1>{title}...</h1>
        <p>{description}...</p>
        <p>By <b>{!author? "Unknown": author}</b> on {new Date(date).toGMTString()}</p>
        <button><a href={newsurl} rel='noreferrer' target='_blank'>Read More</a></button>
      </div>    
      </>
    )

}

export default NewsItems
