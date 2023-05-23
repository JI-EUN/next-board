import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request,answer){
    if(request.method === 'POST'){
        const db = (await connectDB).db("forum");
        let postdb = await db.collection("post");
        
        const selectInfoArry = JSON.parse(request.body)
        postdb.deleteOne({"_id":new ObjectId(selectInfoArry._id)})
        return answer.status(200).json('finish')
        
    }

}