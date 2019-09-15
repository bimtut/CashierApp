import React, { Component } from 'react'
import HistoryHeader from '../components/historyHeader'
import Navigator from '../components/navigator'

class History extends Component {
    render() {
        return (
            <div class='containerHistory'>
                <HistoryHeader />
                <div>
                    <Navigator />
                    <div>
                        {/* isi pake history item */}
                    </div>
                </div>
            </div>
        )
    }
}

export default History