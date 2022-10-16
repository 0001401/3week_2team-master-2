// 게시글 조회 페이지
import styled from "styled-components";
import Comment from "./Comment";
import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();

  return (
    <Page>
      <WriteBox>
        <Icon1
          onClick={() => {
            navigate("/");
          }}
        ></Icon1>
        <h2>제목</h2>
        <p>내용</p>
        <Comment />
      </WriteBox>
    </Page>
  );
}

const WriteBox = styled.div`
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  width: 700px;
  height: 800px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 50px;
  & H2 {
    text-align: center;
    padding: 10px;
  }
  & p {
    padding: 30px;
    margin-left: 50px;
  }
`;

const Page = styled.div`
  width: 100%;
  height: 1500px;
  background-color: #eaeef6;
  overflow: auto;
`;

const Icon1 = styled(FiCheck)`
  font-size: 25px;
  color: #6a778e;
  margin-left: 600px;
  margin-top: 40px;
  width: 80px;
`;

export default Detail;
