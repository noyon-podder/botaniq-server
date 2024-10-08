/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose'
import { USER_ROLE, USER_STATUS } from './user.constant'

export type TUser = {
  _id: Types.ObjectId
  email: string
  password: string
  profilePicture: string
  coverPhoto: string
  name: string
  bio: string
  followers: Types.ObjectId[]
  following: Types.ObjectId[]
  passwordChangedAt?: Date
  verified: boolean
  upvotesReceived: number
  downvotesReceived: number
  posts: Types.ObjectId
  favorites: Types.ObjectId
  role: keyof typeof USER_ROLE
  status: keyof typeof USER_STATUS
  isDeleted: boolean
}

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(id: string): Promise<TUser>
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean
}

export type TUserRole = keyof typeof USER_ROLE
