import React, { Component } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop'

import classes from './Draver.module.css'

const links = [
    1, 2, 3,
];


class Draver extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a>link {link}</a>
                </li>
            )
        })
    }


    render() {
        const cls = [classes.Draver];
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <React.Fragment>

                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>

                {
                    this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null
                }
            </React.Fragment>
        );
    }
}

export default Draver;
