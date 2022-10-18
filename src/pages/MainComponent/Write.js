//글쓰기 페이지
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __addTodo } from "../../Redux/modules/main";
import useInput from "../../pages/MainComponent/hooks/useInput";

function DetailList() {
  const navigate = useNavigate();
  const { main } = useSelector((state) => state.main);
  const [title, ChangeTitleHandler] = useInput("");
  const [content, ChangeContentHandler] = useInput("");

  // const id = new Date();
  const id = main[main.length - 1]?.id + 1 || 1;
  const dispatch = useDispatch();

  //추가하기
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return alert("제목을 입력하세요");
    if (content === "") return alert("내용을 입력하세요");
    // ID
    const input = { id, title, content, isDone: false };

    // API POST
    dispatch(__addTodo(input));

    // Init Empty Value
    ChangeTitleHandler("");
    ChangeContentHandler("");
  };

  return (
    <Div>
      <Box>
        <form onSubmit={onSubmitHandler}>
          <label></label>
          <input
            type="text"
            name="title"
            onChange={(e) => ChangeTitleHandler(e)}
            value={title || ""}
            placeholder="제목"
          />
          <br />
          <label></label>
          <textarea
            type="text"
            name="content"
            onChange={(e) => ChangeContentHandler(e)}
            value={content || ""}
            placeholder="내용을 적어주세요"
          />
          <Boxbtn>
            <button
              type="button"
              onClick={(e) => {
                navigate("/");
              }}
            >
              취소
            </button>
            <button type="submit">작성하기</button>
          </Boxbtn>
        </form>
      </Box>
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
    margin-top: 50px;
    margin-left: 25%;
  }
  & textarea {
    height: 500px;
    width: 500px;
    border: none;
    background-color: #eaeef6;
    border-radius: 10px;
    margin: 40px 20px 0px 50px;
  }
  & textarea::placeholder {
    padding: 20px;
  }
  & input::placeholder {
    padding: 10px;
    font-size: 12px;
  }
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
