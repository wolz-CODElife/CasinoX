import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Nav from './Components/Nav.js'
import RPSgame from './Components/RPSgame'
import './css/GamePlay.css'

const GamePlay = () => {
    const { name } = useParams()
    const [game, setGame] = useState(
        {
            winner: null,
            name: null
        }
    )
    const players = [
        {
            id: 1,
            name: 'me',
            image: '',
            score: 0
        },
        {
            id: 2,
            name: 'computer',
            image: '',
            score: 0
        }
    ]

    useEffect(() => {
        switch (name) {
            case 'rps':
                setGame({...game, name: 'Rock Paper Scissor'})
                break;
            case 'blackjack':
                setGame({...game, name: 'Black Jack'})
                break;
            default:
                break;
        }
    }, [game])

    return (
        <>
            <Nav pagetitle={game?.name} />
            <div className="game_screen">
                <div className="playerslist">
                    <h2>Players</h2>
                    {players.map(player => (
                        <div className="player_card">
                            <img src={player.image} alt="" />
                            <h2>{player.name} <span>{ player.score }</span></h2>
                        </div>
                    ))}
                </div>
                <div className="game_playing">
                    {
                        name === 'rps' ? <RPSgame />:
                            name === 'blackjack' ? '' :
                                ''
                    }
                </div>
            </div>
        </>
    )
}

export default GamePlay
