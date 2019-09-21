import React, { Component } from 'react'
import Modal from 'react-modal'
import '../style/modalCheckout.css'
import {connect} from 'react-redux'
import moment from 'moment'


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
            email:''
        }
    }

    openModal = () => {
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
        const item = [
            {
                name: 'sasuke',
                totalPrice: 3000,
                quantity: 3,
            },
            {
                name: 'naruto',
                totalPrice: 4000,
                quantity: 4,
            },
            {
                name: 'tsunade',
                totalPrice: 5000,
                quantity: 5,
            },
        ]

        const total = 700000
        const nama = 'diisi nama kasir'
        const ppn = this.props.total * 0.1
        const totalharga = this.props.total + ppn
        const itemproduk = this.props.cartItem 
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
                                <label class='textReceipt'>Receipt no: #8888</label>
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

export default ModalCheckout