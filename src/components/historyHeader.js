import React, { Component } from 'react'
import '../style/historyHeader.css'
import logo from '../images/burger.png'

class HistoryHeader extends Component {
    render() {
        return (
            <div class='containerHeader'>
                <div class='imageHistory'>
                    <img class='iconHistory' src={logo} />
                </div>
                <div class='nameHistory'>
                    <p class='textNameHistory'>History</p>
                </div>

            </div>
        )
    }
}

export default HistoryHeader