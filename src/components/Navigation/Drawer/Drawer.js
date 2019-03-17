import React, {Component} from 'react'
import './Drawer.css'


const links = [1, 2, 3]

class Drawer extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href="#" className={'linkItem'}>Link {link}</a>
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
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default Drawer