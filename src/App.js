import { Header } from "./components/Header";
// import { Main } from "./components/Main";
// import {Lifecycle} from "./components/Lifecycle";
// import {OneWayBinding}from "./components/OneWayBinding"
// import Event from "./components/Event";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Login from "./components/Login";
import Hooks from "./components/Hooks";
import Lists from "./components/Lists";
import ListProps from "./components/ListProps";
import Keys from "./components/Keys";
import Forms from "./components/Forms";

function App() {
  const parties=["tvk","dmk","admk"];
  return (
    <div> 
      
      {/* <Main myName="Developer"/>
      <Main myName="Student"/>
      <Main myName="Player"/>
      <Main myName="Engineer"/>
      <Main myName="Singer"/> */}
      {/* <Main myRole="Learner"/>
      <Footer /> */}
      {/* <Lifecycle /> */}
      
      
      {/* <OneWayBinding />
      <Event /> */}

<Login />
<Hooks />
<Lists />
<ListProps parties={parties}/>
<Keys />
<Forms />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
