import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.product = {
      name: 'Samsung TV',
      price: 50000,
    };
    this.categories = ['electronics', 'fashion', 'watches', 'shoes'];
    this.products = [
      {
        category: 'electronics',
        Product: [this.product],
      },
      {
        category: 'fashion',
        Product: [{ name: 'watch', price: 5000 }],
      },
    ];
    
      
    
  }

  render() {
    const { onInputChange } = this.props;

    return (
      <div className="text-white">
        <input onChange={onInputChange} type="text" className="w-50 text-center form-control" />
        <ol className="text-white">
          <li>{this.product.name}</li>
          <li>{this.product.price}</li>
          <li>
            <ul>
              {this.categories.map((cat, ind) => (
                <li key={ind}>{cat}</li>
              ))}
            </ul>
          </li>
        </ol>
        <h1>Nested iteration</h1>
        <ol>
          {this.products.map((prod, index) => (
            <li key={index}>
              <details>
                <summary>{prod.category}</summary>
                <ul>
                  {prod.Product.map((item, keyind) => (
                    <React.Fragment key={keyind}>
                      <li>{item.name}</li>
                      <li>{item.price}</li>
                    </React.Fragment>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
