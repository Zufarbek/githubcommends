import React from 'react'
import './App.css'
import {Link, Outlet} from 'react-router-dom'

export default function App() {
    return (
        <div className="App">
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Link style={{paddingInline: '10px'}} to='/'>Home</Link>
                <Link style={{paddingInline: '10px'}} to='/about'>About</Link>
                <Link style={{paddingInline: '10px'}} to='/contact'>Contact</Link>
            </div>

            <Outlet/>
            
        </div>
    )
}
