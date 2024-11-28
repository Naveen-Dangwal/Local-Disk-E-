import "./App.css";
import { useState } from "react";
import Container from "./Components/Container";
import ErrorMsg from "./Components/ErrorMsg";
import Foodinput from "./Components/Foodinput";
import ShowItem from "./Components/ShowItem";

function App() {

  let[fooditems,setfooditems]=useState([]);
  const onKeyDown=(event)=>{
    if(event.key==='Enter')
    {
      let newFoodItem=event.target.value;
      event.target.value="";
      let newItems=[...fooditems,newFoodItem];
      setfooditems(newItems);
    }
    

  }

  return (
    <>
    <Container>
      <h1>Healthy Food Items</h1>
      <Foodinput handleKeyDown={onKeyDown}/>
      <ErrorMsg items={fooditems}/>
      <ShowItem items={fooditems}/> 
    </Container>
    
    {/* <Container>
      <p>ALl the above items that are mentioned are very good for your health and well being.</p>
    </Container> */}
    </>
  );
}

export default App;
