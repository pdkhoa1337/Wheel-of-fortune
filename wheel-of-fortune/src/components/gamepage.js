import PhraseHolder from "./phraseholder"
import {useState, useEffect} from 'react'
import CharInput from "./char_input"
import Header from './header';
import '../Game.css'



function GamePage(props){
    const [guesses, setGuesses] =  useState([])
    const [curPlayer,setCurPlayer] = useState(0)
    let playernum = 2
    const addGuess = (guess)=>{
        if(!guesses.includes(guess)){
            let points = 0
            props.question.phrase.split('').forEach(letter => {
                if(guess === letter){
                    points+=10
                }
            });
            setGuesses([...guesses,guess])
            setPlayerscore(playerscore.map((score,index)=>{
                if(index === curPlayer){
                    score+=points
                }
                return score
            }))
        }
        nextTurn()
    }
    
    const [playerscore,setPlayerscore] = useState(Array(playernum).fill(0))
    let players = playerscore.map((score,index)=>{
        return <div className='Player' key={index}>
                {index !== curPlayer ? <>Team {index+1} <br/> {score}</> : <b>Team {index+1} <br/> {score}</b>}
            </div>
    })
    const nextTurn = ()=>{
        const cur = curPlayer+1
        if (cur <playernum){
            setCurPlayer(cur)
        }
        else{
            setCurPlayer(0)
        }
    }
    const nextQuestion = ()=>{
        setGuesses([])
        props.nextquestion()
    }
    return (
        <div className='Game'>
            <Header nextquestion ={()=> nextQuestion()} />
            <text className="Clue" >{props.question.clue}</text>
            <PhraseHolder phrase = {props.question.phrase} guesses = {guesses} />
            <button onClick={()=>{
                let x =[]
                props.question.phrase.split('').forEach(letter => {
                    if(!guesses.includes(letter)){
                        x.push(letter)
                    }
                });
                setGuesses([...guesses,...x])
                setPlayerscore(playerscore.map((score,index)=>{
                    if(index === curPlayer){
                        score+=50
                    }
                    return score
                }))
            }            } >Reveal</button>
            <CharInput addguess = {addGuess} guesses={guesses}/>
            <div className='Player-box'>
                {players}
            </div>
            <button onClick={()=>nextTurn()} >Next Turn</button>
        </div>

    )

}

export default GamePage