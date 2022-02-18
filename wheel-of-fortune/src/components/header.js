import '../Game.css'

function Header(props){
    return (
        <div className='Header'>
            <button className='NextQuestion' onClick={()=> props.nextquestion()}>Next question</button>

        </div>
    )
}

export  default Header