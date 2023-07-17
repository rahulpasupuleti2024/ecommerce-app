import Navbar from "./COMPONENTS/Navbar";
import Card from "./COMPONENTS/Card";
import React from "react";
import CustomerData from "./COMPONENTS/CustomerData";

function App() {
  const [isLoggedIn, setIsLoggedIn]=React.useState(false)
  return (
    <div>
      <Navbar data={setIsLoggedIn} initial={isLoggedIn}/>
      <CustomerData/>
      
    </div>
    
  );
}

export default App;
