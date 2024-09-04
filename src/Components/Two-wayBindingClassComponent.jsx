import React, { Component } from 'react'

export default class TwowayBindingClassComponent extends Component {
    constructor(props){
        super(props);
        this.state=({
            name :''
        })
    }
    textHandler(e){
        this.setState({
            name : e.target.value
        })
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.textHandler.bind(this)} />
        <h1 className='text-white'>{this.state.name}</h1>
      </div>
    )
  }
}
