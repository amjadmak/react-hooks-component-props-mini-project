import React from "react";
import About from "./about";
import ArticleList from "./articleList";
import Header from "./header";
import blogData from "../data/blog";

const App = () =>{
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;