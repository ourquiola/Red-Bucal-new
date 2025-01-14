import React, { useState, useEffect } from 'react'
import Nav from '../nav/nav'
import NavPhone from '../nav/NavPhone'


const Layout = (props) => {

    return (
        <React.Fragment>
            
            <Nav />
            <NavPhone />
            
            {props.children}

        </React.Fragment>
    )
}

export default Layout
