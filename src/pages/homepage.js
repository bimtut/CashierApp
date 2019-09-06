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
                <Modal classNames='addItem' isOpen={this.state.addItemshow} toggle={this.addToggle}>
                    {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter> */}
                    <h2>Add Item</h2>
                    <div >
                        <div style={{justifyContent: "left"}}>
                            <p>Name</p>
                        </div>
                        <div style={{justifyContent:"right"}}>
                            <input type="text" placeholder="what is your name?" id="username" style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box", }} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Image</p>
                        </div>
                        <div>
                            <input type="email" placeholder="what is your email?" id="email" style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Price</p>
                        </div>
                        <div>
                            <input type="password" placeholder="input password?" id="password" style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }} />
                        </div>
                    </div>
                    <div style={{ marginBottom: '10px', }}>
                        <div>
                            <p>Category</p>
                        </div>
                        <div>
                            <input type="password" placeholder="what is your name?" id="confirm_password" style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box", }} />
                        </div>
                    </div>
                    <div>
                        <button onClick={this.addToggle}>DAFTAR</button>
                    </div>
                    </Modal>
            </div>
        )
    }
}


export default Homepage