import '../Game.css'


function PhraseHolder(props){
    const list = props.phrase.split('').map((letter,index)=>{
        if(!props.guesses.includes(letter)){
            return <button className="Letter-hidden" key = {index} >{letter}</button>
        }
        else{
            return <button className="Letter-reveal" key = {index} >{letter}</button>
        }

    })
    return(
        <div className='Phrase-holder'>
            {list}
        </div>
    )
}

export default PhraseHolder