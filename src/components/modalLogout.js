import React, { Component } from 'react'
import Modal from 'react-modal'
import power from '../images/powerbutton.png'
import '../style/modalLogout.css'
import { logout } from '../redux/Action/login'
import { connect } from 'react-redux'
import swal from 'sweetalert'

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

class ModalLogout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false

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
        const loggingOut = async () => {
            const userid = localStorage.userid
            await this.props.dispatch(logout(userid))
                .then(
                    // console.log('metu cuk')
                    localStorage.removeItem('userid')
                )
                .then(
                    localStorage.removeItem('jwtToken')
                )
                .then(
                    localStorage.removeItem('name')
                )
                .then(
                    swal({
                        title: "Logout",
                        text: "Logout Success !!",
                        icon: "success",
                        button: "OK"
                    })
                )
                .then(
                    window.location.href = '/'
                )
                .catch(alert('gagal logout'))


        }
        return (
            <div>
                <img class='icon logout' src={power} onClick={this.openModal} />

                <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={placingModal}>
                    <div class='mainLogout'>
                        <p class='logoutConfirm'>Are you sure logging out ?</p>
                        <div class='buttonsLogout'>
                            <button class='logoutButton' onClick={loggingOut}>Logout</button>
                            <button class='cancelLogout'>Cancel</button>

                        </div>
                    </div>
                </Modal>
            </div >
        )
    }

}

// export default ModalLogout
const mapStateToProps = state => {
    return {
        logout: state.logout
    };
};
export default connect(mapStateToProps)(ModalLogout);