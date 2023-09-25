import React from "react";

const Navbar = () => {
    return(
        <div>
            <nav>
                <div class="nav-wrapper">
                    <div className="container">
                        <a href="/home" class="brand-logo left">Social Network</a>
                        <ul id="nav-mobile" class="right">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/posts">Posts</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default Navbar