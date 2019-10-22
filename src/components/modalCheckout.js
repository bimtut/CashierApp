import React, { Component } from 'react'
import Modal from 'react-modal'
import '../style/modalCheckout.css'
import { connect } from 'react-redux'
import moment from 'moment'

import { newTransaction } from "../redux/Action/Transaction";

const series = Math.floor(Math.random() * 1000000)

// placing content in the middle of screen
const placingModal = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}
// untuk pembanding bisa lihat punya zidni. bandingkan mana yang efisien

class ModalCheckout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            isEmail: true,
            Transaksi: [],
            receipt: moment().valueOf(),
            email: ''
        }
    }

    openModal = async () => {
        //new transaction dilakukan di sini ====================================
        console.log('ini id user nya >> ', this.props.userId)
        console.log('ini produknya nya >> ', this.props.cartItem)
        console.log('ini series nya >> ', series)
        console.log('ini ppn nya >> ', this.props.total * 0.1)
        console.log('ini total nya >> ', this.props.total + this.props.total * 0.1)
        const products = []
        this.props.cartItem.map((product) => {
            products.push({
                itemId : product.id,
                quantity: product.quantity,
                subtotal: product.quantity*product.price
            })
        })

        await this.props.dispatch(newTransaction(this.props.userId, series, this.props.total * 0.1, this.props.total + this.props.total * 0.1, products))

        this.setState({
            modalOpen: true
        })
    }
    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }
    render() {

        const ppn = this.props.total * 0.1
        const totalharga = this.props.total + ppn
        const itemproduk = this.props.cartItem
        // ppn = '',
        // total= '' eh udah ada juga ding ini. hahaha

        console.log(this.props.idProducts)

        return (
            <div>
                {/* trigger modalnya adalah text yang nanti ditaruh di dalam tombol. text dijadikan suatu komponen pemicu modal */}

                <p class='textButton' onClick={this.openModal} > Checkout</p>


                <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={placingModal}>
                    <div class='mainModal'>
                        <div class='modalHeader'>
                            {/* buat header */}
                            <div class='mainHeader'>
                                {/* header utama */}
                                <label class='textCheckout'>Checkout</label>
                                <label class='textReceipt'>Receipt no: #{series}</label>
                            </div>
                            <div class='cashier'>
                                {/* header kedua berisi nama cashier */}
                                <label class='cashierName'>Cashier : {localStorage.name}</label>
                            </div>
                        </div>

                        <div class="modalBody">
                            {/* buat list belanjaan. nge-map dari list belanjaan yang sudah dibuat di list item (diambil dari props) */}
                            {itemproduk &&
                                itemproduk.length > 0 &&
                                itemproduk.map((data, index) => {
                                    return (
                                        <div class='totalPerItem' key={index}>
                                            <div class='dataItem'>
                                                <p class='nameItem'>{data.name}</p>
                                                <p class='quantityItem'>{data.quantity}x</p>
                                            </div>

                                            <p class='totalItemPrice'>Rp {data.price * data.quantity}</p>
                                        </div>
                                    )
                                })}
                        </div>
                        <div class='ppnCheckout'>
                            {/* ppn */}
                            {/* posisi ppn di rata kiri masih belum bagus. rapikan */}
                            <p class='ppnText'>PPN 10%</p>
                            <p class='ppnTotal'>Rp {ppn}</p>
                        </div>
                        <div>
                            {/* buat naroh total belanja */}
                            <p class='subTotal'>Total : Rp {totalharga}</p>
                            <p class='paymentMethod'>Payment : Cash</p>
                        </div>
                        {/* setelah part ini copas karena belum paham sepenihnya */}


                        <div className='buttons'>
                            <button type='submit' class="sendButton" onClick={this.postTran}>Send Email</button>
                            <button className='printButton' onClick={this.closeModal} >Print</button>

                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

// export default ModalCheckout
const mapStateToProps = state => {
    return {
        transactionItems: state.transaction
    };
};

export default connect(mapStateToProps)(ModalCheckout)