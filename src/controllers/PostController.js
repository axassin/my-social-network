import { Post } from '../model'


const PostController = {

	async list (ctx) {
		const posts = await Post.find()
		ctx.body = posts
	},

	create(ctx) {
		const newPost = new Post(ctx.request.body)
		newPost.save(err => {
			console.log(err)
		})
	}
	
}

export { PostController }