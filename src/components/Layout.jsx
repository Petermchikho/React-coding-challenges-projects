import React from "react"
import {NavLink,Outlet} from "react-router-dom"

export default function Layout(){
    return(
        <>
        <header>
            <NavLink to="/">Tenzies</NavLink>
        </header>
        <Outlet />
        </>
    )
}