import React, { Component } from 'react'
import '../style/historyItem.css'

class HistoryItem extends Component {
    render() {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>ID Receipt</th>
                            <th>ID Cashier</th>
                            <th>Product</th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    
                </table>
            </div>
        )
    }
}