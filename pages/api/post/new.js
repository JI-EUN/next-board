
import { connectDB } from "@/util/database"

export default  async function  handler(request,answer){
    if(request.method === 'POST'){
        //console.log(request.body)
        if(request.body.title.trim() === "" || request.body.content.trim() === "" ){
            return answer.status(200).json('입력 둘다 제대로 하십쇼!')
        } 
        try{
            const db = (await connectDB).db("forum")
            let postdb = await db.collection('post')
            postdb.insertOne(request.body)
            return answer.redirect(302,'/list')
        }catch(error){
            return answer.status(200).json('뭔가 문제가 있슘당!')
        }
    }
    
}