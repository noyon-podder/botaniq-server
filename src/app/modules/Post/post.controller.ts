import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TImageFiles } from '../../interface/image.interface'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { PostService } from './post.service'

// CREATE A NEW POST
const createPost = catchAsync(async (req, res) => {
  if (!req.files) {
    throw new AppError(400, 'Please upload an image')
  }

  const result = await PostService.createPost(
    req.body,
    req.files as TImageFiles,
  )

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Post Create Successfully',
    data: result,
  })
})

// GET ALL POSTS
const getAllPosts = catchAsync(async (req, res) => {
  const item = await PostService.getAllPost(req.query)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Posts retrieved successfully',
    data: item,
  })
})

export const PostControllers = {
  createPost,
  getAllPosts,
}
