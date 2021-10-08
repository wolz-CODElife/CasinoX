import React, { useEffect, useState } from 'react'
import './RPSgame.css'

const RPSgame = ({players, setPlayers, gameRoundsLeft, setGameRoundsLeft}) => {
    const [choices, setChoices] = useState()
    const [ended, setEnded] = useState(false)

    const Play = (yourChoice) => {
        var player1Choice, player2Choice
        player1Choice = yourChoice.id
        player2Choice = numberToChoice(randToRpsInt())
        let results = decideWinner(player1Choice, player2Choice)
        let message = finalMessage(results)
        rpsFrontend(player1Choice, player2Choice, message)
    }
    const randToRpsInt = () => {
        return Math.floor(Math.random() * 3)
    }
    const numberToChoice = (number) => {
        return ['rock', 'paper', 'scissors'][number]
    }
    const decideWinner = (yourChoice, opponentChoice) => {
        var rpsDatabase = {
            'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
            'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
            'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
        }
        var yourScore = rpsDatabase[yourChoice][opponentChoice]
        var opponentScore = rpsDatabase[opponentChoice][yourChoice]
        
        return [yourScore, opponentScore]
    }
    const finalMessage = ([yourScore, opponentScore]) => {
        if (yourScore === 0) {
            setPlayers([{...players[0]}, {...players[1], score: players[1].score + 1}])
            return {'message': 'You Lost', 'color':'red'}
        } else if (yourScore === 0.5) {
            return { 'message': 'You Tied', 'color': 'yellow' }
        } else {
            setPlayers([{...players[0], score: players[0].score + 1}, {...players[1]}])
            return {'message': 'You Won', 'color': 'green'}
        }
    }
    const rpsFrontend = (yourImageChoice, opponentImageChoice, finalMessage) => {
        var imgDataBase = {
            'rock': 'https://i.postimg.cc/Wp0GZFK4/image.png',
            'paper': 'https://i.postimg.cc/15j35MHV/image.png',
            'scissors': 'https://i.postimg.cc/T3Ngxryt/image.png'
        }
        setChoices({
            player1Choice: imgDataBase[yourImageChoice],
            player2Choice: imgDataBase[opponentImageChoice],
            message: finalMessage
        })
        setGameRoundsLeft(gameRoundsLeft-1)
        setEnded(true)
        setTimeout(() => setEnded(false), 1000)
    }
    return (
        <>
            {!ended ?
                <div className="game_board">
                    <div className="player_card">
                        <img src="https://i.postimg.cc/Wp0GZFK4/image.png" alt="" id="rock" onClick={(e) => Play(e.target)} />
                    </div>
                    <div className="player_card">
                        <img src="https://i.postimg.cc/15j35MHV/image.png" alt="" id="paper" onClick={(e) => Play(e.target)} />
                    </div>
                    <div className="player_card">
                        <img src="https://i.postimg.cc/T3Ngxryt/image.png" alt="" id="scissors" onClick={(e) => Play(e.target)} />
                    </div>
                </div>
                :
                <div className="game_board">
                    {choices?.player1Choice &&
                        <div className="player_card">
                            <img src={choices?.player1Choice} alt="" />
                        </div>
                    }
                    {choices?.message &&
                        <div className="player_card">
                            <h1 style={{ color: choices?.message['color'] }}>{ choices?.message['message'] }</h1>
                        </div>
                    }
                    {choices?.player2Choice &&
                        <div className="player_card">
                            <img src={choices?.player2Choice} alt="" />
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default RPSgame
