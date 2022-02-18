import '../Game.css'

function CharInput(props){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const alphabutton = alphabet.map((letter)=>{
        if(!props.guesses.includes(letter)){
        return <button className="Alphabet"  key={letter} onClick={()=> props.addguess(letter)}> {letter} </button>
    }
        else{
            return <button className="Alphabet-choosed"  key={letter}> {letter} </button>
        }
})

    return (
        <div>
            {alphabutton}
        </div>
    )
}

export default CharInput