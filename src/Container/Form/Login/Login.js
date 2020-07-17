import React, { Component } from 'react';
import { Form, Button, Input, message } from 'antd';
import './Login.css';
import Logo from './../../../assets/images/spacex.png';
import { users } from '../../../database';
import { userInfo } from 'os';
import axios from 'axios';
// import Label from '../Label/Label';
const { FormItem } = Form;

export class Login extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            username: "",
            password: ""

        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSignIn = () => {
        const { username, password } = this.state;

        axios.get(`https://my-json-server.typicode.com/meghathakur111/users-mock-data/users?username=${username}&password=${password}`)
            .then(res => {
                console.log(res.data);
                if (res.data && res.data[0].username === username) {
                    message.success('Login Successful!');
                    localStorage.setItem("role", res.data[0].role);
                    this.props.history.push('/dashboard');
                }
            }).catch((err) => message.error('Oops! Username and Password doesn\'t match our record!'));
    }

    render() {
        return (
            <>
                <div className="main_conatiner">
                    <img src={Logo} className="logo-space-x" />
                    <div className="form-background-space">
                        <div className="floating">
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange}
                                className="floating__input"
                            />
                            <label
                                className="floating__label"
                                data-content="Username"
                            ></label>
                        </div>

                        <div className="floating">
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                className="floating__input password_label"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <label
                                className="floating__label"
                                data-content="Password"
                            ></label>
                        </div>
                        <div className="forget_sign_in">
                            <div className="btn_sign">
                                <Button onClick={this.handleSignIn} label="SIGN IN" type="button">
                                    SIGN IN
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;
