import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, answer) {
  request.body = JSON.parse(request.body);
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(request.body.parentId) })
    .toArray();
  return answer.status(200).json(result);
}
