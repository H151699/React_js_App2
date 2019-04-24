import React from 'react';

import './App.css';



function getLocation(location){
  if(location){
    return <p> Location: {location}</p>;

  }else{
    return undefined;
  }
}

function App() {



  var props ={

  }







  return (

    <div className="App">

      <header className="App-header">
        
      <h1> {props.name ? props.name : 'Anonymous'} </h1>
      {(props.age && props.age >= 18) && <p>age:{props.age} </p>}
     
      {getLocation(props.location)}

      
      </header>
    </div>

  );


 

}

export default App;
