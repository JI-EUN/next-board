import { connectDB } from "@/util/database"

export default  async function  handler(request,answer){
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    return answer.status(200).json(result)
}