import React, { Component } from 'react'
import loading from './block.gif'

export default class Spi extends Component {
  render() {
    return (
      <div className='text-center'>
         <img src={loading} alt='loading'></img>
      </div>
    )
  }
}
