import React, { Component } from 'react'
import '../style/mainItems.css'
const botok = require('../images/botok.jpg')
// const dagangan = [
//     {
//         image: botok,
//         name: 'batok tongkol',
//         price: 'Rp 15.000'
//     },
//     {
//         image: botok,
//         name: 'batok tongkol',
//         price: 'Rp 15.000'
//     },
//     {
//         image: botok,
//         name: 'batok tongkol',
//         price: 'Rp 15.000'
//     }, {
//         image: botok,
//         name: 'batok tongkol',
//         price: 'Rp 15.000'
//     },
//     {
//         image: botok,
//         name: 'batok tongkol',
//         price: 'Rp 15.000'
//     }, {
//         image: botok,
//         name: 'batok tongkol',
//         price: 'Rp 15.000'
//     },
//     {
//         image: botok,
//         name: 'batok tongkol',
//         price: 'Rp 15.000'
//     },
//     {
//         image: botok,
//         name: 'batok tongkol',
//         price: 'Rp 15.000'
//     },
// ]

class mainItems extends Component {
    render() {
        // const tempe = daganganz
        const products = this.props.products
        const cart = this.props.cart;

        // console.log('cart', cart);


        // console.log(data+'jkbkadvbkjbdvkjsbdkjv')
        return (
            <div class='mainItems'>
                <div class='cardsContainer'>
                    {products &&
                        products.length > 0 &&
                        products.map((data, index) => {
                            // console.log('ini index', index, ' ini data ', data)
                            return (
                                <div class='card' key={index} onClick={() => this.props.addToCart(index, data)}>
                                    <img class='imageItems' src={data.image} />
                                    <p class='name'>{data.name}</p>
                                    <p class='priceItems'>Rp {data.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default mainItems