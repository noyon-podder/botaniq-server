import { Types } from 'mongoose'

export interface IPost {
  title: string
  content: string
  author: Types.ObjectId
  category: string
  isPremium: boolean
  images?: string[]
  upvotes?: number
  downvotes?: number
  comments?: Types.ObjectId[]
  upvotedBy?: Types.ObjectId[]
  downvotedBy?: Types.ObjectId[]
  isDeleted: boolean
  views: number
}
