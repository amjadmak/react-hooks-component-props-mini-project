import React from "react";
import Article from "./article.js";
const ArticleList = ({posts}) => {
    return (
        <main>
           {posts.map(post => <Article 
        key={post.id}
        title={post.title}
         date={post.date}
         preview={post.preview}/>)}  
        </main>
    )
}
export default ArticleList;