import React, { Component } from 'react';
import MenuToggle from '../../copmonents/Navigation/MenuToggle/MenuToggle'
import Draver from '../../copmonents/Navigation/Drawer/Draver'


import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        menu: false,
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false,
        })
    }


    render() {
        return (
            <div className={classes.Layout}>
                <Draver
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
