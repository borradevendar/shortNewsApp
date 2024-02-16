import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=94fb045e895244aba2a43e406006d8cb";
    let data = await fetch(url);
    try {
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, loading: false });
    } catch (error) {
      console.log("Hello we got an error");
    }
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <center>
          <h2>HeadLines</h2>
        </center>
        <div className="container">
          <div className="row row-cols-lg-3 row row-cols-md-2 row row-cols-sm-1">
            {articles.map((element, index) => {
              return (
                <Newsitem
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={
                    element.description ? element.description.slice(0, 90) : ""
                  }
                  imgUrl={element.urlToImage}
                  key={index}
                  url={element.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
