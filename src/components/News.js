import React, { Component } from 'react'
import NewsItem from './NewsItem'
import articles from '../sampleOP.json'

export class News extends Component {
    constructor() {
        super();
        // console.log("Hey!!!");
        this.state = {
            articles: articles,
            loading: false
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f8b91f5f46fc4611952f30ecd166495c";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsBrew - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News