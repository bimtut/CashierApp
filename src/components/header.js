import React, { Component } from 'react'
import '../style/header.css'
// import burger from '../images/burger.png'
const logo = require('../images/burger.png')

class Header extends Component {
    render() {
        return(
            <div class='container'>
                <div class='image'>
                    <img class='icon'  src={logo} alt='logo' />
                </div>
                <div class='name'>
                    <p class='textName'>Food Items</p>
                    <div class='bar'>
                        <input placeholder='search..' class='inputBar'></input>
                    </div>
                </div>
                <div class='cart'>
                    <p class='textCart'>cart </p>
                    <p class='numberCart'>{this.props.totalItem}</p>
                </div>
            </div>
        )
    }
}

export default Header