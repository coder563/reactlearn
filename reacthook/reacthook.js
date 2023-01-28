function Button(props){
    console.log('inside Button Function ' )
    return  (     
      <button onClick={()=>props.onClickFunction(props.increment)}>
              {props.increment}
      </button>
    )
  }
  
  function Display(props){
    
    
    return <div>{props.msg}</div>
    
    
    
  }
  
  function App(){
    
   const [counter,setCounter] = useState(42)
  
    function incrementorFunction(incrementvalue){
        console.log('inside incrementor Function ')
         setCounter(counter+incrementvalue)
    }
      // 
    
     return (
        <div>
           <Button onClickFunction={incrementorFunction} increment={10}></Button>
           <Display msg={counter}></Display>        
        </div>
     )
    
       
    
  }
  
  ReactDOM.render(
                <App/>,
                document.getElementById('mountNode')
                 
                 )
    
  