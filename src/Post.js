import React, { Component } from "react";
import Hook from "./hoc/Hook";
import axios from "axios";
import { connect } from "react-redux"

class Post extends Component {
    state={
        post : null
    }
    componentDidMount(){
        let id = this.props.param.post_id
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res =>{
               this.setState({
                   post : res.data
               })
            })
    }
    render() {
        const post = this.state.post ? (
            <div>
                <p className="post-title">{this.state.post.title}</p>
                <p className="pink-text">{this.state.post.body}</p>
            </div>
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
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (id) => {dispatch({type:"DELETE_POST",id:id})}
    }
}


export default connect(mapDispatchToProps)(Hook(Post))