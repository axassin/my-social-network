import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required:true
	},
	message: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

export default PostSchema