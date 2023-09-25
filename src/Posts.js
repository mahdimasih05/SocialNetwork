import React from "react";
import { Component } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

class Posts extends Component {
    state={
        posts:[]
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res =>{
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }
    render() {
        const { posts } = this.state
        const PostsList = posts.length ? (
            posts.map(post => {
                return(
                    <Link to={"/" + post.id}>
                        <div className="center post card" key={post.id}>
                            <div className="post-content">
                                <span className="post-title orange-text">{post.title}</span>
                                <p className="pink-text">{post.body}</p>
                            </div>
                        </div>
                    </Link>
                )
            })
        ) : (
            <div class="load-wrapp">
                <div class="load-3">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        )
        return(
            <div className="center container">
                {PostsList}
            </div>
        )
    }
}

export default Posts