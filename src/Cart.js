import React, { Component } from 'react';
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  updateQuantity = (increaseQuantity, data) => {
    if (!increaseQuantity && data.quantity === 1) {

    } else {
      this.props.dispatch({ type: "UPDATE_PRODUCT", updateQuantityObj: { increaseQuantity, id: data.id } });
    }
  }


  removeProduct = (product) => {
    this.props.dispatch({ type: "REMOVE_PRODUCT", product });
  }


  render() {

    const { cartproductList, total } = this.props;
    const cartDetails = cartproductList.map(data => {
      return (
        <div className='cartProductContainer row' key={data.id}>
          <div className='col col-3'>
            <img src={data.image} alt='image1' className='cartProductImage' />
            <button className='removeProduct' onClick={() => this.removeProduct(data)}>Remove</button>
          </div>
          <div className='col col-9'>
            <div className='cartProductName'>
              {data.name}
            </div>
            <div className='flex_display'>
              <div className='productPrice'>
                ${data.price}
              </div>
              <div className='quantityUpdater'>
                Qty
                      <div className='arrowHolder'>
                  <span className='mt-10'>{data.quantity}</span>
                  <div className='arrowContainer'>
                    <img src='/asset/up-arrow.png' alt='up' className='upArrow' onClick={() => { this.updateQuantity(true, data) }} />
                    <img src='/asset/down-arrow.png' alt='down' className='downArrow' onClick={() => { this.updateQuantity(false, data) }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <>
        <h3>Cart</h3>
        <div className="cartWrapper">
          <div className='cartContainer'>
            {cartDetails}
            {cartproductList.length ? <div className='totalWrapper'>
              <h3>Total</h3>
              <span className='productPrice'>
                ${total}
              </span>
            </div> : 'No Items Added'}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartproductList: state.cardProductObj.cartproductList,
    total: state.cardProductObj.total,
  };
};

export default connect(mapStateToProps)(Cart);

