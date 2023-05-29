import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write(){
  let session = await getServerSession(authOptions);
  if(session){
    return(
        <div>
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글제목"></input>
                <textarea name="content" placeholder="글 내용"/>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
  }else{
    return(
        <div>로그인 하십쇼!</div>
    )
  }
    
}