import React, {Component} from 'react'
import './Drawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

const links = [
    {to: '/', label: 'List', exact: true},
    {to: '/auth', label: 'Authorization', exact: true},
    {to: '/quiz-creator', label: 'Create a list', exact: true},
]

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink to={link.to} exact={link.exact} className={'linkItem'} activeClassName={'active'} onClick={this.clickHandler}>
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const cls =['drawer']

        if (!this.props.isOpen) {
            cls.push('close')
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer