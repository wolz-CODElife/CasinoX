import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Nav from './Components/Nav.js'
import RPSgame from './Components/RPSgame'
import './css/GamePlay.css'

const GamePlay = () => {
    const initialGameRounds = 3
    const { name } = useParams()
    const [game, setGame] = useState(
        {
            winner: null,
            name: null,
        }
    )
    const [players, setPlayers] = useState([
        {
            id: 1,
            name: 'me',
            image: 'https://i.postimg.cc/kG3v2r3C/image.png',
            score: 0
        },
        {
            id: 2,
            name: 'opponent',
            image: 'https://i.postimg.cc/cHDFCk14/image.png',
            score: 0
        }
    ])
    const [gameRoundsLeft, setGameRoundsLeft] = useState(initialGameRounds)
    const [gameOver, setGameOver] = useState(false)

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
        if (gameRoundsLeft < 1) {
            if (players[0].score > players[1].score) {
                setGame({ ...game, winner: players[0].name })
                
            }else if (players[0].score === players[1].score) {
                setGame({...game, winner: null})
            }
            else {
                setGame({...game, winner: players[1].name})
            }
            setTimeout(() => setGameOver(true), 1000)
        }
    }, [name, players, gameRoundsLeft])

    return (
        <>
            <Nav pagetitle={game?.name} />
            <div className="game_screen">
                <div className="playerslist">
                    <h2>Players</h2>
                    {players.map(player => (
                        <div className="player_card" key={player.id}>
                            <img src={player.image} alt="" />
                            <h2>{player.name} <span>{ player.score }</span></h2>
                        </div>
                    ))}
                </div>
                {!gameOver ?
                    <div className="game_playing">
                        {
                            name === 'rps' ? <RPSgame players={players} setPlayers={setPlayers} gameRoundsLeft={gameRoundsLeft} setGameRoundsLeft={setGameRoundsLeft} />:
                                name === 'blackjack' ? '' :
                                    ''
                        }
                    </div>
                :
                    <div className="game_winner">
                        {game.winner ?
                            <h2>The winner is { game.winner === 'me' ? 'You': 'The Opponent' }</h2>
                        :
                            <h2>You tied</h2>
                        }
                        <div className="exit_button">
                            <button>Exit</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default GamePlay
