import React, { Component, useState } from 'react'
import Aux from '../Aux/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {

    const [showsidedrawer, setShowsidedrawer] = useState(true)
    const sideDrawerClosedHandler = () => {

        setShowsidedrawer(false)
    }

    const drawertTogglehandler = () => {
            setShowsidedrawer(!showsidedrawer)
        }
        return (
            <Aux>
                <Toolbar drawertTogglehandler={drawertTogglehandler} />
                <SideDrawer open={showsidedrawer} closed={sideDrawerClosedHandler} />
                <div>Toolbar, Sidebar, backdrop</div>
                <main className="Container">{props.children}</main>
            </Aux>
        )

    }

    export default Layout