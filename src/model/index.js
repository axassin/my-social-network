import PostSchema from './Post'
import mongoose from 'mongoose'

export const Post = mongoose.model('Post', PostSchema)