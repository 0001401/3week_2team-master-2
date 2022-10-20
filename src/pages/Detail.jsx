// 게시글 조회 페이지
import styled from "styled-components";
import CommentList from "../components/Detail/CommentList";
import { FiCheck } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getTodo } from "../Redux/modules/main";
import Button from "../elements/Button";

function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newData = useSelector((state) => state.main.main);
  const { id } = useParams();
  const main = newData.find((main) => main.id === Number(id));

  useEffect(() => {
    dispatch(__getTodo());
  }, []);

  return (
    <Page>
      <WriteBox>
        <Icon1
          onClick={() => {
            navigate("/");
          }}
        ></Icon1>
        <h2>{main?.title}</h2>
        <Body>{main?.content}</Body>
        <Button
          bgColor="rgb(249, 223, 144, 0.8)"
          width="80px"
          height="25px"
          text={"수정하기"}
          inline="border: none; border-radius: 10px; margin-left: 20px; float: right; margin: 0px 10px 0px 0px;"
          type="button"
          onClick={() => {
            navigate("/update/" + id);
          }}
        />
        <CommentList cardId={id} />
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
`;

const Body = styled.p`
  padding: 30px;
  margin-left: 50px;
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
