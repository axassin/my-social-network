import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import PostItem from '../containers/PostItem'
import _ from 'lodash'

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts()
	}

	renderPostList() {
		if(!this.props.posts){
			return (
				<div>Loading....</div>
			)
		}

		return _.map(this.props.posts, (post) => {
			return(
				<PostItem
					key={post._id}
					post={post}
				/>
			)
		})
	}

	render() {
		return (
			<ul>
				{ this.renderPostList() }
			</ul>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		posts: state.posts
	}
}
export default connect(mapStateToProps, { fetchPosts })(PostList)