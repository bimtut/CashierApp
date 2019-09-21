import React, { Component } from 'react'
import '../style/login.css'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../redux/Action/login'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }

    render() {
        const loginUser = () => {
            this.state.user.push({
                email: this.state.email,
                password: this.state.password
            })
            // alert(this.state.user)
            inputToken()
                .then(window.location.href = '/')
                .catch(alert('gagal login'))
                
        }

        const inputToken = async () => {
            await this.props.dispatch(login(this.state.user[0]))
        }

        return (
            <div class='mainLogin'>
                <div class='loginBox'>
                    {/* <img alt='loginii' src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567570643/img/avatar_ynz0bv.png' class='avatar' /> */}
                    <h1>Login here</h1>
                    {/* <form> */}
                    <p>Email</p>
                    <input type='text' name='email' placeholder='Enter your email' onChange={(val) => this.setState({ email: val.target.value })} />
                    <p>Password</p>
                    <input type='password' name='password' placeholder='Enter your password' onChange={(val) => this.setState({ password: val.target.value })} />
                    {/* <Link to='/'> */}
                    <button onClick={loginUser}>Sign In</button>

                    {/* </Link> */}
                    {/* </form> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    };
};
export default connect(mapStateToProps)(Login);
// export default Login