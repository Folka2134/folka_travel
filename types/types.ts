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

// LOCATIONS

export type CountriesParams = {
  name: string;
  code: string;
}

export type City = {
  name: string
  admin1: string
  admin2: string
  country: string
  lat: string
  lng: string
}