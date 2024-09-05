import React, { Component } from 'react'

export default class ApiClassComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            propducts:[]
        }
    }
    handleProducts(url){
        fetch(url)
        .then(res=>res.json())
        .then(data=>this.setState({
            propducts:data
        }))
    }
    componentDidMount(){
       this.handleProducts(`https://fakestoreapi.com/products`)
    }
  render() {
    return (
      <div className='container-fluid d-flex flex-wrap'>
        {
            this.state.propducts && (
                this.state.propducts.map((product,ind)=>(
                <div className='card m-3' style={{width:'200px'}}>
                    <div className='card-card-img-top '>
                        <img src={product.image} height={180} width={180} />
                    </div>
                    <div className='card-header'>
                        <p className='card-title overflow-auto'>{product.title}</p>
                    </div>

                </div>

                ))
            )
        }

        
      </div>
    )
  }
}
