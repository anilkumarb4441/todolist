import { useState } from 'react';
import './App.css';
import deleteIcon from './assets/delete.png'

function App() {

const [inputState, setInputField] = useState('');
const [todoData, setTodoData] = useState(['react']);


const onSubmitBtn = (e)=>{
  if(e.keyCode === 13) { 
  e.preventDefault();
    setTodoData([...todoData, inputState]);
  setInputField('');
}
  
}

const deleteTodod = (etm)=>{
const deleteItem = todoData.filter((item)=>item !==etm);
setTodoData(deleteItem);
}


  return (
    <div className="App">
     <div className='totoContainer'>
     <form>
        <input  type='text' placeholder='' value={inputState} onChange={(e)=>setInputField(e.target.value)} onKeyDown={(e)=>onSubmitBtn(e)}/>
     </form>
     <div className='todoListWraper'>
      { todoData.length > 0 ? todoData.map((item, idx)=>{
        return(
        <div className='mainContainer' key={idx}>
        <input type='checkbox'/>
        <p className='todoName'>{item}</p>
        <img src={deleteIcon} alt='deletebtn' onClick={()=>deleteTodod(item)}/>
     </div>
      );
      })
        
     :null
      }
     </div>
     </div>
    </div>
  );
}

export default App;
