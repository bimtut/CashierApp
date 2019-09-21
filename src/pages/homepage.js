import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Header from '../components/header'
import Navigator from '../components/navigator'
import MainItems from '../components/mainItems'
import CartItems from '../components/cartItems'
import '../style/homepage.css'

import { connect } from 'react-redux'
import { getProduct } from '../redux/Action/Product'

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartTotal: 0,
            isLoading: false,
            product: [], //lets see apa aja kegunaan mereka
            cart: [], //isinya list item yang di cart
            total: [], //diisi total harga. tapi masak dari array jadi angka
            idProducts: []
        }
    }

    componentDidMount = async () => {
        if (!localStorage.name) {
            window.location.href = '/login'
        }
        console.log('ini ',localStorage)
        this.setState({ isLoading: true })
        await this.props.dispatch(getProduct())
        this.setState({
            product: this.props.product.productList,
            isLoading: false
        });
    }

    addToCart = (index, val) => {
        const a = this.state.cart.find(data => data.name === val.name)
        const input = {
            name: val.name,
            image: val.image,
            price: val.price,
            quantity: 1,
        }
        if (a !== undefined) {
            console.log('a yang sekarang',a);
            const b = this.state.cart.indexOf(a)
            console.log('ini b ',b)
            this.state.total = Number(this.state.total - val.price*a.quantity)
            this.state.cart.splice(b,1)
            this.setState({
                cart: this.state.cart,
                cartTotal: this.state.cartTotal - 1
            })
        } else {
            // console.log(this.state.cart.indexOf(input))
            // console.log(val.name)
            console.log(a + ' dan ' + index)

            this.state.cart.push(input)

            this.state.total = Number(this.state.total + val.price)

            this.state.idProducts.push({
                id: val.id,
                name: val.name,
                price: val.price,
                quantity: 1
            })

            this.setState({
                cart: this.state.cart,
                cartTotal: this.state.cartTotal + 1
            })
        }
    }

    increment = (index) => {
        this.state.cart[index].quantity++
        this.state.idProducts[index].quantity++
        this.state.total = Number(this.state.total + this.state.cart[index].price)
        this.setState({
            cart: this.state.cart
        })
    }

    decrement = (index) => {
        if (this.state.cart[index].quantity > 1) {
            this.state.cart[index].quantity--
            this.state.idProducts[index].quantity--
            this.state.total = Number(this.state.total - this.state.cart[index].price)
            this.setState({
                cart: this.state.cart,
            })
        } else {
            // alert('kasih fungsi buat apus ini chart. allert dulu mau apus cart, lalu konfirm')
            this.state.total = Number(this.state.total - this.state.cart[index].price)
            this.state.cart.splice(index, 1)
            this.state.idProducts.splice(index, 1)
            this.state.cartTotal--

            this.setState({
                cart: this.state.cart
            })
        }
    }

    cancelAll = () => {
        this.setState({
            cartTotal: 0,
            cart: [],
            total: [],
            idProducts: [],

        })
    }

    // deleteFromCart = (index) => {
    //     this.state.total = Number(this.state.total - this.state.cart[index].price)
    //     this.state.cart.splice(index, 1)
    //     this.state.idProducts.splice(index, 1)
    //     this.setState({
    //         cart: this.state.cart
    //     })

    // }

    render() {
        // console.log('kkkk', this.state.product)

        return (

            <div class='mainClass'>
                <Header totalItem={this.state.cartTotal} />
                <div class='contents'>
                    <Navigator />
                    <MainItems
                        products={this.state.product}
                        cart={this.state.cart}
                        addToCart={this.addToCart}
                    />
                    <CartItems
                        cart={this.state.cart}
                        increment={this.increment}
                        decrement={this.decrement}
                        cancelAll={this.cancelAll}
                        total={this.state.total}
                        idProducts={this.state.idProducts}
                    />
                </div>

            </div>
        )
    }
}

// export default Homepage
const mapStateToProps = state => {
    return {
        product: state.product
    };
};

export default connect(mapStateToProps)(Homepage)