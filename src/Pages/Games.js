import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightCircle } from './Components/Icons'
import Nav from './Components/Nav.js'
import'./css/Games.css'

const Games = () => {
    const pagetitle = 'Games'
    const games = [
        {
            name: 'Rock Paper Scissors',
            link: 'rps',
            image: 'https://i.postimg.cc/66Z0h17t/image.png'
        },
        {
            name: 'Black Jack',
            link: 'blackjack',
            image: 'https://i.postimg.cc/WpZBJ8TJ/image.png'
        }
    ]
    return (
        <>
            <Nav pagetitle={pagetitle} />
            <div className="games">
                <div className="cards">
                    {games.map(game => (
                        <Link to={`game/${game.link}`} key={game.link}>
                            <div className="card">
                                <img src={game.image} alt="icon" />
                                <div>
                                    <p>{game.name}</p>
                                    <p><ArrowRightCircle /></p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Games
