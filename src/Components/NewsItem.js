import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {title, description, imagePath, uniqueURL} = this.props

    return (
      <div className='my-3'>
       <div className="card" >
      
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={uniqueURL} target='_blank' className="btn btn-sm btn-primary">Read full News</a>
          </div>
        </div>
      </div>
    )
  }
}
