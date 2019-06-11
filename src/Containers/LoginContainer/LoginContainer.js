import React, { Component } from 'react';
import axios from 'axios';
import Login from 'component/Login';
import $ from "jquery";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

class LoginContainer extends Component {

    state = {
        isSignUp: false,
        name: "",
        id: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }
    
    handleChangeSignUp = () => {
        this.setState({
            isSignUp: !this.state.isSignUp
        })
    }

    handleLogin = () => {
        console.log(this.state);
        const { id, password } = this.state;
        axios.post("http://aws.jaehoon.kim:5000/api/auth",{"userId":id, "password":password}).then((response) => {
            cookies.set("token", response.data)
            window.location.href = '/';
        })
        console.log("로그인")
    }

    handleSignUp = () => {
        console.log(this.state);
        const { name, id, password } = this.state;
        let sendData = {"userId":id, "password":password, "name":name}
        axios.post("http://aws.jaehoon.kim:5000/api/account",sendData,{headers: {'Content-Type': 'application/json'}}).then((response) => {
            console.log(response);
        }).catch(e => console.log(e)) 
    }

    render() {
        const { isSignUp } = this.state;
        const { handleChange, handleSignUp, handleLogin, handleChangeSignUp } = this;

        return (
            <div>
                <Login isSignUp={isSignUp} handleChangeSignUp={handleChangeSignUp} handleChange={handleChange} handleSignUp={handleSignUp} handleLogin={handleLogin} />
            </div>
        );
    }
}

export default LoginContainer;