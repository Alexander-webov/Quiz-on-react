import React, { Component } from 'react';

import classes from './Backdrop.module.css'

class Backdrop extends Component {
    render() {
        return (
            <div
                className={classes.Backdrop}
                onClick={this.props.onClick}
            >

            </div>
        );
    }
}

export default Backdrop;
