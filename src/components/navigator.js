import React, { Component } from 'react'
import '../style/navigator.css'
import swal from 'sweetalert'
import AddItem from '../components/modalAddItem'
import ModalLogout from '../components/modalLogout'
const garpu = require('../images/sendokgarpu.png')
const notepad = require('../images/notepad.png')
const add = require('../images/addgreen.png')
const power = require('../images/powerbutton.png')


class Navigator extends Component {
    render() {
        return (
            <div class='navigator'>
                <a href="/">
                    <img class='icon' src={garpu} />
                </a>
                <a href="/history">
                    <img class='icon' src={notepad} />
                </a>
                <a>
                    {/* <img class='icon' src={add} /> */}
                    <AddItem />
                </a>
                <a>
                    <ModalLogout />
                </a>
            </div>
        )
    }
}

export default Navigator
