import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HamBuger } from './Icons'
import './Nav.css'

const Nav = ({ pagetitle }) => {
    const [opened, setOpened] = useState(false)
    return (
        <>
            <div className="nav">
                <div className="title">{pagetitle}</div>
                <button onClick={() => setOpened(!opened)}><HamBuger /></button>
            </div>
            {opened &&
                <div className="popup">
                    <Link to="/">Home</Link>
                    <Link to="/games">Games</Link>
                </div>
            }
        </>
    )
}

export default Nav
