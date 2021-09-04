import "./App.css";
import Header from "./components/Layout/Header";
import Icecream from "./components/Meals/Icecream";
import Cart from "./components/Cart/Cart";
import {useState} from 'react';

function App() {

  const [showcart , setshowcart] = useState(false);

  const showcarthandler = () =>{
    setshowcart(true);
  }

  const hidecarthandler = () =>{
    setshowcart(false);
  }

  return (
    <>
      {showcart && <Cart onhidecrt={hidecarthandler}/>}
      <div className="Background1">
        <Header onshowcrt = {showcarthandler}/>
        <Icecream />
      </div>
    </>
  );
}

export default App;
