import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => (
    <Aux>
        <Toolbar/>
        <div>Toolbar, Sidebar, backdrop</div>
        <main className="Container">{props.children}</main>
    </Aux>
)

export default Layout