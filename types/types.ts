// USER

export type CreateUserParams = {
  clerkid: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
}

export type UpdateUserParams = {
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  photo?: string;
}