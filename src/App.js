import React, { Component } from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Posts from "./Posts";
import About from "./About"
import Home from "./Home"
import Navbar from "./Navbar";
import Post from "./Post";

class App extends Component {
  render() {
    return(
      <div className="center">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route path="/posts" element={<Posts/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/:post_id" element={<Post/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
