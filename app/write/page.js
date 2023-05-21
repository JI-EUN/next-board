export default function Write(){
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
}