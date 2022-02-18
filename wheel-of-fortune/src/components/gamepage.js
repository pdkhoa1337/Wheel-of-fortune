import PhraseHolder from "./phraseholder"
import {useState, useEffect} from 'react'
import CharInput from "./char_input"
import '../Game.css'



function GamePage(props){
    const [guesses, setGuesses] =  useState([])

    const addGuess = (guess)=>{
        if(!guesses.includes(guess)){
            console.log(guess)
            setGuesses([...guesses,guess])
        }
    }
    useEffect(()=>{
        setGuesses([])
    },[props])

    return (
        <div>

            <text className="Clue" >{props.question.clue}</text>
                


            <PhraseHolder phrase = {props.question.phrase} guesses = {guesses} />

            <CharInput addguess = {addGuess} guesses={guesses}/>
        </div>
    )

}

export default GamePage