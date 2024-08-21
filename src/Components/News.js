import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spi from './Spi'
import PropTypes from 'prop-types'




export default class News extends Component {
   

  

  constructor(){
    super()
    this.state={
      articles: [],
      loading: false,
      page:1
    }
  }


  
  async componentDidMount(){
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1562d0e6b73c43fc88823b057ea4028b&page=1&pageSize=9`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData =  await data.json()
    console.log(parsedData)
    this.setState({loading:false})
    this.setState({articles : parsedData.articles})
  }

  
  handlePrev = async()=>{

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1562d0e6b73c43fc88823b057ea4028b&page=${this.state.page-1}&pageSize=9`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData =  await data.json()
    this.setState({loading:false})
    this.setState({
      page: this.state.page - 1,
      articles : parsedData.articles
    })

  }

  handleNext = async ()=>{

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1562d0e6b73c43fc88823b057ea4028b&page=${this.state.page+1}&pageSize=9`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData =  await data.json()
    this.setState({loading:false})
    this.setState({
      page: this.state.page + 1,
      articles : parsedData.articles
    })
    
  }


  render() {
    return (
      <div className='container my-3'>
         <h2>{this.props.heading}</h2>
          {this.state.loading && <Spi></Spi>}
         <div className='row'>
         {!this.state.loading && this.state.articles.map((element)=>{

          return <div className='col-md-4' key={element.url}>
            <NewsItem title ={element.title} description = {element.description}   uniqueURL ={element.url}></NewsItem>
          </div>
             
         })}

           
       
        </div>
          <div className='container d-flex justify-content-between'>
          <button disabled = {this.state.page <=1} type="button"  className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
          <button disabled = {this.state.page >=10} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}


//1562d0e6b73c43fc88823b057ea4028b