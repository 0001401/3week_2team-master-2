// 작성된 글들이 목록 형식으로 보여질 페이지입니다
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, findTodo } from "../../Redux/modules/mainSlice";

function List() {
  const navigate = useNavigate();
  const { main } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const onDeleteHandler = (id) => {
    // id라는 이름을 정해줘야 알아먹음
    dispatch(deleteTodo({ id: id }));
  };

  const onChangeHandler = (id) => {
    dispatch(findTodo({ id: id }));
    navigate(`/detail/${id}`);
  };

  return (
    <MainBox>
      {main && main.length > 0 ? (
        main.map((main) => {
          return (
            <ListBox key={main.id} id={main.id}>
              <Button
                onClick={() => {
                  navigate("/detail");
                }}
              >
                더보기
              </Button>
              <h2>{main.id}</h2>
              <h2>{main.title}</h2>
              <p>{main.content}</p>
              <button onClick={() => onDeleteHandler(main.id)}>삭제하기</button>
            </ListBox>
          );
        })
      ) : (
        <ListBox>
          <Button onClick={() => onChangeHandler(main.id)}>더보기</Button>
          <h2>툴킷</h2>
          <p>거지같은데</p>
        </ListBox>
      )}
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
