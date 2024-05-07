import { connect } from "http2";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

import { CreateUserParams, UpdateUserParams } from "@/types/types";
import { handleError } from "../utils";
import { revalidatePath } from "next/cache";

export async function getUserById(userId: String) {
  try {
    await connectToDatabase()

    const  user = await User.findOne({ clerkId: userId})

    return JSON.parse(JSON.stringify(user))

  } catch (error) {
    handleError(error)
  }
}

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user)

    return JSON.parse(JSON.stringify(newUser))
    
  } catch (error) {
    handleError(error)
  }
}

export async function updateUser(clerkId: String, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })

    if (!updatedUser) throw new Error('User not found')

    return JSON.parse(JSON.stringify(updatedUser))

  } catch (error) {
    handleError(error)
  }
}

export async function deleteUser(clerkId: String) {
  try {
    await connectToDatabase()

    const userToDelete = await User.findOne({ clerkId })

    if (!userToDelete) throw new Error('User not found')

    const deletedUser = await User.findOneAndDelete(userToDelete._id)
    revalidatePath('/')

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null  

  } catch (error) {
    handleError(error)
  }
}