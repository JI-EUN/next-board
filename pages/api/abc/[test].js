import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, answer) {
  const db = (await connectDB).db("forum");
  let postdb = await db.collection("post");
  postdb.deleteOne({ _id: new ObjectId(request.query.test) });
  return answer.status(200).json("finish");
}
