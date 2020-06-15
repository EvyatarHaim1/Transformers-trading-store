import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Button, Container } from '@material-ui/core';
import Cart from './Cart';
@inject('us','ps')
@observer

class Product extends Component {
  constructor(props){
    console.log(props)
    super(props)
     this.state= {
       budget : this.props.us.currentUser.credit
      }
    }

    // componentWillMount() {
    //   if (!this.props.store.authenticated) {
    //     this.props.history.push("/Login")
    //   }
    // }

  addToCart(id) {
    this.props.ps.addToCart(id);
  }
  
  // handleBudget(){
  // this.state.budget - this.list
  // }

  list(data, index) {
    return (
      <div key={index} className='col-md-4 top-space'>
        <div className='card'>
          <img
            className='card-img-top'
            height={200}
            src={data.image}
            alt='Product stuff'
          />
          <div className='card-body'>
            <h4 className='card-title'>{data.name}</h4>
            <p className='card-text'>{data.description}</p>
            <div className='detail'>
              <div className='price text-center'>$ {data.price}</div>
              <Button
                onClick={() => this.addToCart(data.id)}
                className='btn btn-primary btn-sm'
                style={{width:"150px", backgroundColor:"black", color:"white"}}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className='main'>
        <h2 className="budget">
          Your budget is <br/>{this.state.budget} $ </h2>
        <span className={"Cart"}>
        <Cart style={{float:"right"}}/>
        </span>
        <div className='Transformers-div'>
          <div className='selected'>
            {this.props.ps.products.map((data, index) =>
              this.list(data, index)
            )}
          </div>
        </div>
        <div className='col-md-4'>
          <div className='top-space'>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;