import React, { Component } from 'react'

export default class CardComponent extends Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){
        alert("Card component loaded");
        console.log(this.props.products);  // Logs products instead of showing an alert
     }
  render() {
    const {products} = this.props;
    return (
        <div className='container-fluid d-flex flex-wrap' >
        {
          
            products && products.map((product, ind) => (
               <div className='card m-3' style={{width:'200px'}} key={ind}>
                  <div className='card-img-top'>
                     <img src={product.image} height={180} width={180} alt={product.title} />
                  </div>
                  <div className='card-header'>
                     <p className='card-title overflow-auto'>{product.title}</p>
                  </div>
               </div>
            ))
         }
         
        

        
      </div>
    )
  }
}
