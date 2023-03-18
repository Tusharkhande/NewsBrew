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

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsBrew - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0,45)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News