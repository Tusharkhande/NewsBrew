import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Ashley Belanger",
            "title": "Report: Microsoft cut a key AI ethics team",
            "description": "Expert calls decision \"damning,\" says it's time for regulators to get involved.",
            "url": "https://arstechnica.com/tech-policy/2023/03/amid-bing-chat-controversy-microsoft-cut-an-ai-ethics-team-report-says/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/03/GettyImages-1246861873-760x380.jpg",
            "publishedAt": "2023-03-14T22:09:53+00:00",
            "content": "83 with \r\nAn entire team responsible for making sure that Microsofts AI products are shipped with safeguards to mitigate social harms was cut during the companys most recently layoff of 10,000 employ… [+2490 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Kyle Orland",
            "title": "Microsoft signs another Call of Duty deal in bid to impress regulators [Updated]",
            "description": "Microsoft says Boosteroid deal should make cross-platform intent \"clear to regulators.\"",
            "url": "https://arstechnica.com/gaming/2023/03/microsoft-offers-call-of-duty-to-yet-another-streaming-platform/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/03/cod-760x380.jpg",
            "publishedAt": "2023-03-14T20:13:17+00:00",
            "content": "Enlarge/ Artist's conception of Microsoft marching on regulators with fresh evidence of its cross-platform intentions for Call of Duty.\r\n110 with \r\nMicrosoft announced Tuesday that it has signed a 10… [+3314 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Microsoft-backed OpenAI starts release of powerful AI known as GPT-4",
            "description": "OpenAI, the creator of chatbot sensation ChatGPT, on Tuesday said it is beginning to release a powerful artificial intelligence model known as GPT-4, setting the stage for even more human-like technology to proliferate.",
            "url": "https://www.reuters.com/technology/microsoft-backed-openai-starts-release-powerful-ai-known-gpt-4-2023-03-14/",
            "urlToImage": "https://www.reuters.com/resizer/Qatcb67oqU3H4BfmQk-z0UF11Ug=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O3JWMLGR2ZLHDG5SA6ONPIX664.jpg",
            "publishedAt": "2023-03-14T18:09:34Z",
            "content": "March 14 (Reuters) - OpenAI, the creator of chatbot sensation ChatGPT, on Tuesday said it is beginning to release a powerful artificial intelligence model known as GPT-4, setting the stage for even m… [+1672 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Eric Song",
            "title": "Daily Deals: Save $50 Off the Microsoft Xbox Series X Gaming Console + Elite Series 2 Wireless Controller Bundle - IGN",
            "description": null,
            "url": "https://www.ign.com/articles/daily-deals-microsoft-xbox-series-x-gaming-console-elite-series-2-controller",
            "urlToImage": "https://assets-prd.ignimgs.com/2022/09/01/090122-1662050863587.jpg?width=1280",
            "publishedAt": "2022-09-01T17:05:23Z",
            "content": "Check out the new hot daily deals for today, including a rare discount on an Xbox Series X gaming console bundle, $170 off the Apple AirPods Max headphones, $50 off the Bose SoundLik II portable Blue… [+12798 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Hey!!!");
        this.state = {
            articles: this.articles,
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