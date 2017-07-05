import axios from 'axios'

const POST_URL = 'api/posts'


export const FETCH_POSTS = 'fetch_posts'

export function fetchPosts() {
	const request = axios.get(POST_URL)
	console.log(request)
	return {
		type: FETCH_POSTS,
		payload: request
	}
}