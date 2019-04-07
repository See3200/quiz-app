import React, {Component} from 'react'
import './Auth.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends Component {

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className={'auth'}>
                <div>
                    <h1>Authentification</h1>
                    <form onSubmit={this.submitHandler} className={'auth-form'}>

                        <Input label="Email"/>

                        <Input label="Password" errorMessage={"Error"}/>
                        <Button type="success" onClick={this.loginHandler}>Sign in</Button>
                        <Button type="primary" onClick={this.registerHandler}>Sign up</Button>
                    </form>
                </div>
            </div>
        )
    }
}