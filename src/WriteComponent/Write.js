//글쓰기 페이지
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Comment from "../DetailComponent/Comment";

function DetailList() {
  const navigate = useNavigate();

  return (
    <Div>
      <Box>
        <form>
          <Label>작성하기</Label>
          <br />
          <input placeholder="제목" /> <br />
          <label></label>
          <textarea placeholder="내용을 적어주세요" />
          <Boxbtn>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              취소
            </button>
            <button>작성하기</button>
          </Boxbtn>
        </form>
      </Box>
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
  height: 700px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 40px;
  & input {
    height: 30px;
    width: 300px;
    border: none;
    background-color: #eaeef6;
    border-radius: 10px;

    margin-left: 25%;
  }
  & textarea {
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: center;
    border: none;
    background-color: #eaeef6;
    border-radius: 10px;
    margin: 40px 40px 30px 130px;
    padding: 20px;
  }
  & input::placeholder {
    padding: 10px;
    font-size: 12px;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 20px;
`;

const Boxbtn = styled.div`
  width: 300px;
  height: 500px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  & button {
    border: none;
    background-color: rgb(249, 223, 144, 0.8);
    width: 80px;
    height: 30px;
    margin-left: 20px;
    border-radius: 20px;
  }
`;

export default DetailList;
