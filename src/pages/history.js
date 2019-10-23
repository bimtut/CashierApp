import React, { Component } from 'react'
import HistoryHeader from '../components/historyHeader'
import Navigator from '../components/navigator'
import { connect } from 'react-redux'
import { getTransaction } from "../redux/Action/Transaction";
import '../style/history.css'
import Moment from 'moment';

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
            <div class='mainClassa'>
                <HistoryHeader />
                <div class='contentsa'>
                    <Navigator />
                    <div class='isinye'>
                        {/* isi pake history item */}
                        <div class='sedap'>
                            {this.state.historyList &&
                                this.state.historyList.length > 0 &&
                                this.state.historyList.map((data, index) => {
                                    const date = Date(data.created_at)
                                    return (

                                        <div class='cardisinye'>
                                            <div class='uppercontainer'>
                                                <div class='datecashier'>
                                                    <p class='opening'>transaction number</p>
                                                    <p class='openseries'>#{data.series}</p>
                                                    <p class='date'>{Moment(date).format('DD MMM YYYY')}</p>
                                                    <p class='hours'>{Moment(date).format('h:mm a')}</p>


                                                </div>
                                                <div class='series'>
                                                    <p class='cashiera'>cashier:</p>
                                                    <p class='cashiername'> {data.cashier}</p>
                                                </div>


                                            </div>
                                            <p class='purchase'>Purchase order(s) :</p>

                                            <div class='kandangbelanja'>

                                                {data.transactionitems &&
                                                    data.transactionitems.map((item, index) => {
                                                        return (
                                                            <div class='transItem'>
                                                                <div class='imagecontainer'>
                                                                    <img src={item.image} class='imagetrans' />
                                                                </div>
                                                                <div class='datatrans'>
                                                                    <p class='nametrans'>{item.name}</p>
                                                                    <p class='pricetrans'>@Rp {item.price}</p>
                                                                    <p class='quanttrans'>jumlah: {item.quantity} pc(s)</p>
                                                                </div>
                                                                <div class='subtranscontainer'>
                                                                    <p class='subtotaltext'>subtotal</p>
                                                                    <p class='subtrans'>{item.subtotal}</p>
                                                                </div>
                                                            </div>

                                                        )
                                                    })
                                                }
                                                <div class='kandangjadi'>
                                                    <div class='texttotal'>
                                                        <p>TOTAL: </p>
                                                    </div>
                                                    <div class='totalfinal'>
                                                        <div>
                                                            <p class='itsendhere'>{data.total}</p>
                                                        </div>
                                                        <div class='textkandang'>
                                                            <p class='ppnfinal'>*ppn 10% : </p>
                                                            <p class='ppncount'>{data.ppn}</p>
                                                        </div>
                                                    </div>
                                                </div>
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