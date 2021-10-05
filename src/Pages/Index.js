import React from 'react'
import { Link } from 'react-router-dom'
import './css/Index.css'

const Index = () => {
    return (
        <div className="index">
            <div className="board">
                <h1 className="title">CasinoX</h1>
                <p className="action">
                    <Link to="/games">GET STARTED</Link>
                    <i>OR</i>
                    <Link to="/games">TRY FOR FREE</Link>
                </p>
            </div>
        </div>
    )
}

export default Index