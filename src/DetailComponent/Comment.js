// 작성된 글을 확인시 댓글창을 구현할 페이지입니다

import styled from "styled-components";

function Comment() {
  return (
    <CommentBox>
      <form>
        <input />
        <button>댓글달기</button>
      </form>
    </CommentBox>
  );
}

const CommentBox = styled.div`
  background-color: #eaeef6;
  width: 600px;
  height: 250px;
  border-radius: 40px;
  margin-left: 45px;
  margin-top: 300px;
  & input {
    border: none;
    width: 400px;
    height: 25px;
    border-radius: 10px;
    margin-left: 60px;
    margin-top: 20px;
  }
  & button {
    border: none;
    border-radius: 20px;
    width: 80px;
    height: 30px;
    background-color: rgb(249, 223, 144, 0.8);
    margin-left: 10px;
  }
`;

export default Comment;
