import './App.css';
import GamePage from './components/gamepage'
import Header from './components/header';
import {useState} from 'react'


var data = require('./data/questions.json')
var len = data.questions.length

function App() {
  const [index, setIndex] = useState(0)
  return (
    <div className="App">
      <Header nextquestion={ ()=>{
        if(index<len-1){
          setIndex(index+1)
        }
        else{
          setIndex(0)
        }
      }}/>
      <GamePage question = {data.questions[index] }></GamePage>
    </div>
  );
}

export default App;
