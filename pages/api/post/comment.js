import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(request, answer) {
    let data = JSON.parse(request.body);
    let session = await getServerSession(request,answer,authOptions);
    if(request.method === 'POST'){
        let saveData ={
            content:data.comment,
            parent : new ObjectId(data._id),
            author: session.user.email
        };
        const db = (await connectDB).db("forum")
        let commentdb = await db.collection('comment')
        commentdb.insertOne(saveData);
        return answer.status(200).json("save");
    }
    
}