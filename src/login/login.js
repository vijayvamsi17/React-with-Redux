import React, { Component } from 'react';
import './login.css';

class LoginComponent extends Component {

    constructor() {
        super();
        const loginObj = {
            user : "",
            pwd: ""
        };
        this.state = {loginObj};
        this.onsubmit = this.onsubmit.bind(this);
    }

    componentWillMount() {
        const loginObj = this.state.loginObj
        this.setState({loginObj});
    }

    onsubmit(event) {
        event.preventDefault();
        console.log(this.state.loginObj);
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.onsubmit}>
                    <label htmlFor="user">Username:</label>
                    <input id="user" type="text" placeholder="username" ref={this.state.loginObj.user}/>
                    <br />
                    <label htmlFor="pass">Password:</label>
                    <input id="pass" type="text" placeholder="password" ref={this.state.loginObj.pwd}/>
                    <br />
                    <button>Login</button>
                </form>
            </div>
         )
    }
}
 
export default LoginComponent;