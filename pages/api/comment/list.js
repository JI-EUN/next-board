import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(request, answer) {
    request.body = JSON.parse(request.body);
    const db = (await connectDB).db("forum");
    let checkIDCount = await db.collection('comment').findOne({"parent": new ObjectId(request.body._id)});
    console.log(checkIDCount)
  }
  