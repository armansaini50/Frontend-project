import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Foodoption from "./component/Foodoption";
import GroceryOption from "./component/GroceryOption";
import DineOption from "./component/DineOption";
import Scanner from "./component/Scanner";
import Footer from "./component/Footer";




function App(){

    return(
        <>
        <Header></Header>
        <Foodoption></Foodoption>
        <GroceryOption></GroceryOption>
        <DineOption></DineOption>
        <Scanner></Scanner>
        <Footer></Footer>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
