// USER

export type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  photo: string;
}

export type UpdateUserParams = {
  firstName: string | null;
  lastName: string | null;
  username: string
  photo: string
}