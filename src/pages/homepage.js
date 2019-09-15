import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Header from '../components/header'
import Navigator from '../components/navigator'
import MainItems from '../components/mainItems'
import CartItems from '../components/cartItems'
import '../style/homepage.css'

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkOutShow: false,
            addItemshow: false
        }
        console.log('this.state')
    }

    hideCheckOut = () => {
        this.setState({
            checkOutShow: false
        })
    }
    showCheckOut = () => {
        this.setState({
            checkOutShow: true
        })
    }
    hideAddItem = () => {
        this.setState({
            addItemshow: false
        })
    }
    showAddItem = () => {
        this.setState({
            addItemshow: true
        })
    }
    addToggle = () => {
        this.setState({
            addItemshow: !this.state.addItemshow
        });
    }
    render() {
        return (

            <div class='mainClass'>
                <Header />
                <div class='contents'>
                    <Navigator />
                    <MainItems />
                    <CartItems />
                </div>
                <Modal classNames='checkOut' onClose={this.hideCheckOut} isOpen={this.state.checkOutShow}></Modal>
                
            </div>
        )
    }
}

export default Homepage