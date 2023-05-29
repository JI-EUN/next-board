'use client'
import { useEffect, useState } from "react"

export default function Comment(props){
    let [comment, setComment ]= useState('');
    
    useEffect(()=>{
        fetch('/api/comment/list',
        {method:'POST',body: JSON.stringify({_id : props._id})})
      },[])

    return(
        <div>
            <p>댓글 목록 보여줄 부분</p>
            <input onChange={(e)=>{setComment( e.target.value )}} />
            <button onClick={()=>{
                fetch('/api/post/comment',
                {method:'POST', body: JSON.stringify({ comment: comment, parentId: props._id, author:'' })}
            )}}>
                댓글전송
            </button>
        </div>
    )
}