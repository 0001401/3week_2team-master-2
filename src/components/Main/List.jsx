// 작성된 글들이 목록 형식으로 보여질 페이지입니다
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { __deleteTodo, __getTodo } from "../../Redux/modules/main";
import Button from "../../elements/Button";

function List() {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const { main } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const onDeleteHandler = (id) => {
    dispatch(__deleteTodo({ id: id }));
  };

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch, pathname]);

  return (
    <MainBox>
      {main && main.length > 0
        ? main.map((main) => {
            return (
              <ListBox key={main.id} id={main.id}>
                <Button
                  bgColor="rgb(249, 223, 144, 0.8)"
                  width="80px"
                  height="25px"
                  text={"더보기"}
                  inline="border: none; border-radius: 10px; margin: 30px 10px 0px 0px; float: right;"
                  onClick={() => {
                    navigate("/detail/" + main.id);
                  }}
                />
                <h2>{main.title}</h2>
                <p>{main.content}</p>
                <Button
                  bgColor="rgb(249, 223, 144, 0.8)"
                  width="80px"
                  height="25px"
                  text={"삭제하기"}
                  inline="border: none; border-radius: 10px; margin: 30px 10px 0px 0px; float: right;"
                  onClick={() => onDeleteHandler(main.id)}
                />
              </ListBox>
            );
          })
        : ""}
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
  margin: 20px 0px 40px 40px;

  & h2 {
    margin: 30px 0px 20px 20px;
  }
  & p {
    margin: 20px 0px 20px 20px;
    font-size: 13px;
  }
`;

export default List;
