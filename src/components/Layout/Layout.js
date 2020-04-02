import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showsidedrawer: true,
        }
    }
    sideDrawerClosedHandler = () => {
        this.setState({
            showsidedrawer: false
        })
    }

    drawertTogglehandler = () => {
        this.setState((prevState) => {
            return { showsidedrawer: !prevState.showsidedrawer }
        })

    }

    render() {
        return (
            <Aux>

                <Toolbar drawertTogglehandler={this.drawertTogglehandler} />
                <SideDrawer open={this.state.showsidedrawer} closed={this.sideDrawerClosedHandler} />
                <div>Toolbar, Sidebar, backdrop</div>
                <main className="Container">{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout