import React, { Component } from 'react';
import './styles.css'
import { connect } from "react-redux";

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: []
        }
    }

    componentDidMount = () => {
        fetch("product.json")
            .then(function (response) {
                console.log("em show: " + response);
                return response;
            })
            .then((data) => {
                console.log("show: " + data);
                return data.json();
            })
            .then((productList) => {
                this.setState({
                    productList: productList
                })
            })
            .catch(function (err) {
                console.log("Fetch problem show: " + err.message);
            });
    }

    addProduct = (data) => {
        data.quantity = 1;
        this.props.dispatch({ type: "ADD_PRODUCT", product: data });
    }


    render() {
        const { productList, } = this.state;
        const { cartProductIdList } = this.props;
        const productDetails = productList.map(data => {
            return (
                <div className='productWrapper' key={data.id}>
                    <div className='productCategory'>
                        {data.category}
                    </div>
                    <div className='productTitle'>
                        {data.name}
                    </div>
                    <div className='productImg '>
                        <img src={data.image} alt={data.name} />
                    </div>
                    <div className='productPrice center'>
                        ${data.price}
                    </div>
                    <div className='center'>
                        {cartProductIdList.includes(data.id) ? "Added" : <button className='addToCartBtn'
                            onClick={() => this.addProduct(data)} >Add To Cart</button>}
                    </div>
                </div>
            )
        })

        return (
            <>
                <h3>Products</h3>
                <div className="productContainer">
                    {productDetails}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartproductList: state.cardProductObj.cartproductList,
        cartProductIdList: state.cardProductObj.cartProductIdList,
    };
};

export default connect(mapStateToProps)(ProductList);

