import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, answer) {
  if (request.method === "POST") {
    let editInfo = {
      title: request.body.title,
      content: request.body.content,
    };
    const db = (await connectDB).db("forum");
    let postdb = await db.collection("post");
    postdb.updateOne(
      { _id: new ObjectId(request.body._id) }, //수정할 게시글 아이디값
      {
        $set: editInfo,
      }
    );
    return answer.redirect(302, "/list");
  }
}
