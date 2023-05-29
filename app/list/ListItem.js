"use client";
import Link from "next/link";
export default function ListItem({ result }) {
  return (
    <div>
      {result.map((board, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={`/detail/${board._id}`}>
              <h4>{board.title}</h4>
            </Link>
            <Link href={`/edit/${board._id}`}>✏</Link>
            <button
              onClick={(e) => {
                fetch("/api/post/delete", {
                  method: "POST",
                  body: JSON.stringify({ _id: board._id, author:board.author}),
                })
                .then((res) => res.json())
                .then((json) => {
                  if(json === 'error1'){
                    window.alert('본인 글이 아닙니다.');
                  }else if(json === 'delete'){
                    const selectList = e.target.parentElement;
                    selectList.style.opacity = 0;
                    setTimeout(() => {
                      selectList.style.display = "none";
                    }, 1000);
                  }
                });
                //fetch(`/api/abc/${board._id}`);
              }}
            >
              🗑️
            </button>
            <p>2023년 5월 19일</p>
            <span>{board.author}</span>
          </div>
        );
      })}
    </div>
  );
}
