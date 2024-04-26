import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description,newsUrl, imageUrl } = this.props;
    return (
      <div className="container my-4">
        <div className="card border border-primary">
          <img src={!imageUrl? 'https://w0.peakpx.com/wallpaper/421/437/HD-wallpaper-plain-purple-background-purple.jpg': imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
        {/* 41259e4f2fe345deae49be381a39f765 */}
      </div>
    );
  }
}

export default NewsItems;
