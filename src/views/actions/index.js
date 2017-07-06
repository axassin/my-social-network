import axios from 'axios'

const POST_URL = 'api/posts'


export const FETCH_POSTS = 'fetch_posts'
export const CREATE_POST = 'create_post'

export function fetchPosts() {
	const request = axios.get(POST_URL)
	console.log(request)
	return {
		type: FETCH_POSTS,
		payload: request
	}
}

export function createPost(data) {
	const request = axios.post(POST_URL, data)
		.then(() => console.log("success"))
	
	return {
		type: CREATE_POST,
		payload: request
	}
}