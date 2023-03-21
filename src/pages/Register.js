import React, { Component } from "react";
import '../Login.css';
import axios from "axios";
import { Navigate } from "react-router-dom";

class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';
    state = {
        redirect: false
    };

    submit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:8000/api/register', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm
        });

        this.setState({
            redirect: true
        })
    }
    render() {

        if (this.state.redirect) {
            return <Navigate to={'/login'} />;
        }

        return (
            <main className="form-signin w-100 m-auto">
                <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <input className="form-control" placeholder="First Name" required
                        onChange={e => this.first_name = e.target.value} />

                    <input className="form-control" placeholder="Last Name"
                        onChange={e => this.last_name = e.target.value} />

                    <input type="email" className="form-control" placeholder="Email"
                        onChange={e => this.email = e.target.value} />

                    <input type="password" className="form-control" placeholder="Password"
                        onChange={e => this.password = e.target.value} />

                    <input type="password" className="form-control" placeholder="Password Confirm"
                        onChange={e => this.password_confirm = e.target.value} />

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </form>
            </main>
        )
    }
}

export default Register;