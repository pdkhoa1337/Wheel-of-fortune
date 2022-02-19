import PhraseHolder from "./phraseholder"
import {useState, useEffect} from 'react'
import CharInput from "./char_input"
import '../Game.css'



function GamePage(props){
    const [guesses, setGuesses] =  useState([])

    const addGuess = (guess)=>{
        if(!guesses.includes(guess)){
            setGuesses([...guesses,guess])
        }
    }
    useEffect(()=>{
        setGuesses([])
    },[props])

    return (
        <div>

            <text className="Clue" >{props.question.clue}</text>
                

            <button onClick={()=>{
                let x =[]
                props.question.phrase.split('').forEach(letter => {
                    if(!guesses.includes(letter)){
                        x.push(letter)
                    }
                });
                setGuesses([...guesses,...x])
            }            } >Reveal</button>
            <PhraseHolder phrase = {props.question.phrase} guesses = {guesses} />

            <CharInput addguess = {addGuess} guesses={guesses}/>
        </div>
    )

}

export default GamePage