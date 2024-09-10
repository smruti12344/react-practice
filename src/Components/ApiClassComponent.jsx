import React, { Component } from 'react'
import CardComponent from './CardComponent';
import FormValidation from './FormValidation';

export default class ApiClassComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    handleProducts(url){
        fetch(url)
        .then(res=>res.json())
        .then(data=>this.setState({
            products:data
        }))
    }
    componentDidMount(){
       this.handleProducts(`https://fakestoreapi.com/products`)
    }
  render() {
    return (
     <>
     <CardComponent products={this.state.products}/>
     <FormValidation/>
     </>
    )
  }
}
