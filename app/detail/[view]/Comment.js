"use client";
import { useEffect, useState } from "react";

export default function Comment(props) {
  let [data, setData] = useState([]);
  let [comment, setComment] = useState("");

  useEffect(() => {
    fetch("/api/comment/list", {
      method: "POST",
      body: JSON.stringify({ parentId: props._id }),
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <div>
      <p>댓글 목록 보여줄 부분</p>
      {data.length > 0
        ? data.map((list, i) => {
            return (
              <p key={i}>
                <span>{list.name}</span> <br />
                {list.content}
              </p>
            );
          })
        : "댓글없음"}
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/post/comment", {
            method: "POST",
            body: JSON.stringify({
              comment: comment,
              parentId: props._id,
              author: "",
            }),
          })
            .then((res) => res.json())
            .then((saveData) => {
              setData([...data, saveData]);
            });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
