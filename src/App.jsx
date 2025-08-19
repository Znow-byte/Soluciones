import React from "react";
import Topbar from "./components/Topbar";
import Main from "./components/Main";
import About from "./components/About";
import Machinery from "./components/Machinery";
import MisionVision from "./components/MisionVision";
import ContactUs from "./components/ContactUs";
import History from "./components/History";

function App(){
    return (
        <div>
            <Topbar/>
            <Main/>
            <About/>
            <History/>
            <Machinery/>
            <MisionVision/>
            <ContactUs/>
        </div>
    );
}

export default App;