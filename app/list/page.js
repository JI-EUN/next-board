import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./detailLink";

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    
    return (
        <div className="list-bg">
            {
                result.map((board,i)=>{
                    return(
                        
                        <div className="list-item" key={i}>
                            <Link prefetch={false} href={`/detail/${board._id}`}>
                                <h4>{board.title}</h4>
                            </Link>    
                            <DetailLink/>
                            <p>2023년 5월 19일</p>
                        </div>
                    )
                })
            }
        </div>
    )
}