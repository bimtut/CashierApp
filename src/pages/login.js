import React, { Component } from 'react'
import '../style/login.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div class='mainLogin'>
                <div class='loginBox'>
                    <img src='https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567570643/img/avatar_ynz0bv.png' class='avatar' />
                    <h1>Login here</h1>
                    <form>
                        <p>Email</p>
                        <input type='text' name='email' placeholder='Enter your email' onChange={(val) => this.setState({ email: val.target.value })} />
                        <p>Password</p>
                        <input type='password' name='password' placeholder='Enter your password' onChange={(val) => this.setState({ password: val.target.value })} />
                        <button >Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
} 

export default Login