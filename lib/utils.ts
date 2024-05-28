import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { cities } from "@/constants/cities"
import { connectToDatabase } from "./database/";

import City from "./database/models/city.model";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export async function saveDataToDb(data: any) {

//   try {
//     await connectToDatabase();

//     const addCities = await City.insertMany(cities)

//     return JSON.parse(JSON.stringify(addCities))
    
//   } catch (error) {
//     console.error(error)
//   }

// }