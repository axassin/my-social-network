import React, { Component } from 'react'
import PostList from '../../containers/PostList'
import '../../styles/Post/postindex.scss'

class PostIndex extends Component {
	
	render() {
		return (
			<div>
				<h1 className="title">Post</h1>
				<PostList />
			</div>
		)
	}
}

export default PostIndex