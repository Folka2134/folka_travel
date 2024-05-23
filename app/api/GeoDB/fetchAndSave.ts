import mongoose from "mongoose"

import axios from "axios"
import GeoDbData from "@/lib/database/models/GeoDB.model";
import { connectToDatabase } from "@/lib/database";

export async function getGeoDbData(req: any, res: any) {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Fetch data from the API
    const response = await axios.get('https://api.example.com/data');

    // Create a new document in the database for each piece of data
    response.data.forEach(async (item: any) => {
      const data = await GeoDbData.create(item);

      return JSON.parse(JSON.stringify(data))
    });

    res.status(200).json({ message: 'Data fetched and saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
    // handleError(error)
  }
};