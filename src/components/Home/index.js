import React from "react";
import CreateDeckButton from "./CreateDeckButton";
import DisplayDecks from "./DisplayDecks";

function Home() {
  
  return (
    <div className="container">
      <CreateDeckButton />
      <DisplayDecks />
    </div>
  )
} 

export default Home;