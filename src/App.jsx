import React from "react";
import Topbar from "./components/Topbar";
import Main from "./components/Main";
import About from "./components/About";
import Machinery from "./components/Machinery";
import MisionVision from "./components/MisionVision";

function App(){
    return (
        <div>
            <Topbar/>
            <Main/>
            <About/>
            <Machinery/>
            <MisionVision/>
        </div>
    );
}

export default App;