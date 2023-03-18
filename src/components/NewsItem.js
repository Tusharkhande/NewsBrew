import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title,description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/imagegallery/29_02_2020_17_00_20_7172535.jpg?width=920&format=jpeg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem