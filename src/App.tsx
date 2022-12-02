import {useState} from 'react';
import {MessageComponent} from '@syncfusion/ej2-react-notifications';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import './App.css';

function App() {
  const [isVisible, setVisibility] = useState(false);
  const handleChange=(event:any)=>{
    let inputVal = event.target.value;
    setVisibility((inputVal<18 || inputVal>60)? true: false)
  }
  const contentTemplate=()=>{
    return(
      <div>
        <p>Enter a valid age between 18 and 60</p>
        <ButtonComponent content='Dismiss' onClick={dismissClick}></ButtonComponent>
      </div>
    )
  }
  const dismissClick=()=>{
    setVisibility(false)
  }
  return (
    <div className="App">
      <label>Enter your age:</label>
      <input onChange={handleChange}></input><br/><br/>
      <MessageComponent visible={isVisible} 
        variant="Outlined"
        severity='Warning'
        cssClass='e-content-center'
        showIcon={false}
        showCloseIcon={false}
        content={contentTemplate}
        >
      </MessageComponent>
    </div>
  );
}

export default App;
