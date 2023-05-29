import { connectDB } from "@/util/database"
import bcrypt from 'bcrypt'

export default async function handler(request,answer){
    const db = (await connectDB).db("forum")
    if(request.method === 'POST'){
        const checkIDCount = await db.collection('user_cred').find({ "email": request.body.email}).count();
        
        //가입 반려관련 조건문
        if(request.body.email === "" || request.body.name === "" ||  request.body.password === ""){
            return answer.status(200).json('빈내용이 있습니다.')
        }else if(checkIDCount){
            return answer.status(200).json('중복.')
        }
        
        try{
            //user role 관련 조건문
            if(!request.body.role){
                request.body.role = 'normal'
            }
            let hash = await bcrypt.hash(request.body.password,10)
            request.body.password = hash;
            await db.collection('user_cred').insertOne(request.body)
            return answer.redirect(302,'/')
        }catch(error){
            return answer.status(200).json('뭔가 문제가 있슘당!')
        }
        
    }
}