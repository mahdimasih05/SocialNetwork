import React from "react";
import { Component } from "react";
import { connect } from "react-redux"

class Home extends Component {
    render() {
        const { posts } = this.props
        const PostsList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="center post card" key={post.id}>
                        <div className="post-content">
                            <span className="post-title orange-text">{post.title}</span>
                            <p className="pink-text">{post.body}</p>
                        </div>
                    </div>
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

function mapStateToProps(state) {
    return { posts: state.posts }
  }

export default connect(mapStateToProps)(Home)