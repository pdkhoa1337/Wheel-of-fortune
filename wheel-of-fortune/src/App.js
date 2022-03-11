import './App.css';
import GamePage from './components/gamepage'
import {useState} from 'react'


var data = require('./data/questions.json')
var len = data.questions.length

function App() {
  const [index, setIndex] = useState(0)
  return (
    <div className="App">

      <GamePage question = {data.questions[index]  } nextquestion={ ()=>{
        if(index<len-1){
          setIndex(index+1)
        }
        else{
          setIndex(0)
        }
      }}></GamePage>
    </div>
  );
}

export default App;
