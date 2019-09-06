import React, { Component } from 'react'
import '../style/mainItems.css'
const botok = require('../images/botok.jpg')
const dagangan = [
    {
        image: botok,
        name: 'batok tongkol',
        price: 'Rp 15.000'
    },
    {
        image: botok,
        name: 'batok tongkol',
        price: 'Rp 15.000'
    },
    {
        image: botok,
        name: 'batok tongkol',
        price: 'Rp 15.000'
    },{
        image: botok,
        name: 'batok tongkol',
        price: 'Rp 15.000'
    },
    {
        image: botok,
        name: 'batok tongkol',
        price: 'Rp 15.000'
    },{
        image: botok,
        name: 'batok tongkol',
        price: 'Rp 15.000'
    },
    {
        image: botok,
        name: 'batok tongkol',
        price: 'Rp 15.000'
    },
    {
        image: botok,
        name: 'batok tongkol',
        price: 'Rp 15.000'
    },
]

class mainItems extends Component {
    render() {
        // const tempe = dagangan
        return (
            <div class='mainItems'>
                <div class='cardsContainer'>
                    {dagangan &&
                        dagangan.length > 0 &&
                        dagangan.map((data, index) => {
                            return(
                                <div class='card' key={index}>
                                    <img class='imageItems' src={data.image}/>
                                    <p class='name'>{data.name}</p>
                                    <p class='price'>{data.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
} 

export default mainItems