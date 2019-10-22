import React, { Component } from 'react'
// import '../style/cartItems.css'
import '../style/cartItems.css'
import CheckoutModal from './modalCheckout'
const coffee = require('../images/coffee.png')
const botok = require('../images/botok.jpg')

class CartItems extends Component {
    state = {
        cart: this.props.cart,
        total: null
    }
    render() {
        const telo = false

        const item = this.props.cart
        console.log(item)
        return (
            <div class='mainCart'>
                <div class='listOfCart'>
                    {this.props.cart.length == 0 ?
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
                                        <div key={index} class='cartExist'>
                                            <div class='listImage'>
                                                <img class='foodImage' src={data.image} />
                                            </div>
                                            <div class='count'>
                                                <p class='countName'>{data.name}</p>
                                                <span class="counter">
                                                    <p class="myButton" onClick={() => { this.props.decrement(index)}}>-</p>
                                                    <p class="inpud" >{data.quantity}</p>
                                                    <p class="myButton" onClick={() => { this.props.increment(index)}}>+</p>
                                                </span>
                                            </div>
                                            <div class='price'>
                                                <p class='harga'>Rp {data.price * data.quantity}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>

                    }

                </div>
                {this.props.cart == 0 ? ('') :
                    <div className='menuBawah'>
                        <div className='total'>
                            <h3 className='textTotal'>Total : </h3>
                            <h3 className='textHarga'>Rp. {this.props.total}*</h3>
                            {/* <h3 className='textHarga'>Rp. {this.props.sum}*</h3> */}
                        </div>
                        <div className='ppn'>
                            <span>*Belum termasuk ppn</span>
                        </div>
                        <div className='checkButton'>
                            {/* <p className='textCancel'>{CheckoutModal}</p> */}
                            <CheckoutModal 
                                cartItem = {this.props.cart}
                                idProducts = {this.props.idProducts}
                                total = {this.props.total}
                                userId = {this.props.userId}
                            />
                        </div>
                        <div onClick={this.props.cancelAll} className='cancel'>
                            <p className='textButton'>Cancel</p>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

export default CartItems