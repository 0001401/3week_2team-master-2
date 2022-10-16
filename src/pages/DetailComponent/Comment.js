// 작성된 글을 확인시 댓글창을 구현할 페이지입니다
import styled from "styled-components";

function Comment() {
  return (
    <CommentBox>
      <form>
        <Label>닉네임</Label>
        <Input2 />
        <Label>내용</Label>
        <Input />
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
  & button {
    border: none;
    border-radius: 20px;
    width: 80px;
    height: 30px;
    background-color: rgb(249, 223, 144, 0.8);
    margin-left: 10px;
  }
`;

const Input = styled.input`
  border: none;
  width: 200px;
  height: 25px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 20px;
`;

const Input2 = styled.input`
  border: none;
  width: 100px;
  height: 25px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 20px;
`;

const Label = styled.label`
  margin-left: 40px;
`;

export default Comment;
