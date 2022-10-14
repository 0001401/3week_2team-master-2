// 작성된 글을 확인할 때 열리는 창입니다
import styled from "styled-components";
import Comment from "./Comment";

function DetailList() {
  return (
    <Div>
      <form>
        <Box>
          <label>제목</label>
          <input /> <br />
          <label></label>
          <textarea />
        </Box>
      </form>
      {/* 글쓰기 기능은 textarea */}
      <Comment />
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 1500px;
  background-color: #eaeef6;
  overflow: auto;
`;

const Box = styled.div`
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  width: 600px;
  height: 800px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 40px;
  & input {
    height: 30px;
    width: 300px;
    border: none;
    background-color: #eaeef6;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 50px;
  }
  & label {
    margin-top: 30px;
    margin-left: 50px;
    font-size: 14px;
  }
  & textarea {
    height: 500px;
    width: 500px;
    border: none;
    background-color: #eaeef6;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 50px;
  }
`;

export default DetailList;
