import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Content from "./routes/Content";

import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/project' element={<Project/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Content/>}/>
</Routes>
</>

  );
}

export default App;
