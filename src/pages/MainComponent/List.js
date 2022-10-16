// 작성된 글들이 목록 형식으로 보여질 페이지입니다
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function List() {
  const navigate = useNavigate();

  return (
    <MainBox>
      <ListBox>
        <Button
          onClick={() => {
            navigate("/detail");
          }}
        >
          더보기
        </Button>
        <h2>제목</h2>
        <p>내용</p>
      </ListBox>
    </MainBox>
  );
}

const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin: 20px 0px 40px 40px; //상 오 하 왼

  & h2 {
    margin: 30px 0px 20px 20px;
  }
  & p {
    margin: 20px 0px 20px 20px;
    font-size: 13px;
  }
`;

const Button = styled.button`
  background-color: rgb(249, 223, 144, 0.8);
  border: none;
  border-radius: 10px;
  width: 80px;
  height: 25px;
  float: right;
  margin: 150px 25px 0px 0px;
`;

export default List;
