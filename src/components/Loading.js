import React from "react";
import loadingCSS from './loading.module.css';
const Loading = () => {
 
    return (
      <div className={loadingCSS.container}>
        <img
          src="https://media.tenor.com/V5tPEhTgWegAAAAi/we-have-just-received-breaking-news-we-have-news.gif"
          alt="We have just recieved a breaking news"
        />
      </div>
    );
  
}


export default Loading
