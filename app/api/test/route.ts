import { connectToDatabase } from "@/database/mongoose";

export async function GET() {
  await connectToDatabase();
  return Response.json({ message: "MongoDB is working 🚀" });
}