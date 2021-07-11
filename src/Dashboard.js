import React, { Component } from 'react';
import Cart from './Cart';
import ProductList from './ProductList';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {


        return (
            <div className="row">
                <div className='col col-8'>
                    <ProductList />
                </div>
                <div className='col col-4'>
                    <Cart />
                </div>
            </div>
        );
    }
}

export default Dashboard;
