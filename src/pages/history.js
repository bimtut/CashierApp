import React, { Component } from 'react'
import HistoryHeader from '../components/historyHeader'
import Navigator from '../components/navigator'
import { connect } from 'react-redux'
import { getTransaction } from "../redux/Action/Transaction";
import '../style/history.css'

class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            historyList: []
        }
    }

    componentDidMount = async () => {
        await this.props.dispatch(getTransaction())
        this.setState({
            historyList: this.props.historyList
        })
        console.log('ini listnya nih >> ', this.state.historyList)
    }
    render() {
        return (
            <div class='mainClass'>
                <HistoryHeader />
                <div class='contents'>
                    <Navigator />
                    <div class='isinye'>
                        {/* isi pake history item */}
                        <div class='sedap'>
                            {this.state.historyList &&
                                this.state.historyList.length > 0 &&
                                this.state.historyList.map((data, index) => {
                                    return (

                                        <div class='cardisinye'>
                                            <div>
                                                <p>Transaction date: {data.created_at}</p>
                                                <p>Cashier: {data.cashier}</p>
                                            </div>
                                            <div>
                                                <p>#{data.series}</p>

                                            </div>
                                            <p>Purchase order :</p>

                                            <div class='kandangbelanja'>

                                                {data.transactionitems &&
                                                    data.transactionitems.map((item, index) => {
                                                        return (
                                                            <div class='transItem'>
                                                                <div class='imagecontainer'>
                                                                    <img src={item.image} class='imagetrans' />
                                                                </div>
                                                                <div>
                                                                    <p>{item.name}</p>
                                                                    <p>@ Rp {item.price}</p>
                                                                    <p>jumlah: {item.quantity} pc(s)</p>
                                                                </div>
                                                                <div>
                                                                    <p>{item.subtotal}</p>
                                                                </div>
                                                            </div>

                                                        )
                                                    })
                                                }
                                                <p>{data.ppn}</p>
                                                <p>{data.total}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// export default History
const mapStateToProps = state => {
    return {
        historyList: state.transaction.transactionItems
    };
};

export default connect(mapStateToProps)(History)