import React, { Component } from 'react'
// import '../style/cartItems.css'
import '../style/cartItems.css'
import CheckoutModal from './modalCheckout'
const coffee = require('../images/coffee.png')
const botok = require('../images/botok.jpg')

class CartItems extends Component {
    render() {
        const telo = false
        const item = [
            {
                name: 'botok',
                price: '15000',
                image: botok
            },
            {
                name: 'sate',
                price: '20000',
                image: botok
            },
            {
                name: 'botok',
                price: '15000',
                image: botok
            },
            {
                name: 'sate',
                price: '20000',
                image: botok
            },
            {
                name: 'botok',
                price: '15000',
                image: botok
            },
            {
                name: 'sate',
                price: '20000',
                image: botok
            },
        ]
        return (
            <div class='mainCart'>
                <div class='listOfCart'>
                    {telo == true ?
                        <div class='CartItems'>
                            <div class='cartNotif'>
                                <img class='iconCart' src={coffee} />
                                <p class='emptyCart'>Your cart is empty</p>
                                <p class='subtextCart'>Please add some items from the menu</p>
                            </div>
                        </div> :
                        <div class='CartItems'>
                            {item &&
                                item.length > 0 &&
                                item.map((data, index) => {
                                    return (
                                        <div class='cartExist'>
                                            <div class='listImage'>
                                                <img class='foodImage' src={data.image} />
                                            </div>
                                            <div class='count'>
                                                <p class='countName'>{data.name}</p>
                                                <span class="counter">
                                                    <p class="myButton" >-</p>
                                                    <p class="inpud" >0</p>
                                                    <p class="myButton">+</p>
                                                </span>
                                            </div>
                                            <div class='price'>
                                                <p class='harga'>Rp.200000</p>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>

                    }

                </div>
                {telo == true ? ('') :
                    <div className='menuBawah'>
                        <div className='total'>
                            <h3 className='textTotal'>Total : </h3>
                            <h3 className='textHarga'>Rp. 150000*</h3>
                            {/* <h3 className='textHarga'>Rp. {this.props.sum}*</h3> */}
                        </div>
                        <div className='ppn'>
                            <span>*Belum termasuk ppn</span>
                        </div>
                        <div className='checkButton'>
                            {/* <p className='textCancel'>{CheckoutModal}</p> */}
                            <CheckoutModal/>
                        </div>
                        <div onClick={this.props.cancel} className='cancel'>
                            <p className='textButton'>Cancel</p>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

export default CartItems