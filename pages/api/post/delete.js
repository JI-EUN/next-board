import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, answer) {
  let selectInfoArry = JSON.parse(request.body);
  let session = await getServerSession(request,answer,authOptions);
  let sessionEmail = session.user.email;
  let selectEmail = selectInfoArry.author;
  let role = session.user.role
  try{
    if (request.method === "POST" && sessionEmail === selectEmail || role === 'admin') {
      const db = (await connectDB).db("forum");
      let postdb = await db.collection("post");
      postdb.deleteOne({ _id: new ObjectId(selectInfoArry._id) });
      return answer.status(200).json("delete");
    }else{
      return answer.status(500).json("error1");
    }
  }catch(error){
    return answer.status(500).json("error1");
  }

}
