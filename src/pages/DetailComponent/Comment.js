// 작성된 글을 확인시 댓글창을 구현할 페이지입니다
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addComment, __getCommentList } from "../../Redux/modules/detail";

function Comment() {
  const dispatch = useDispatch();

  const init = { nickname: "", body: "" };
  const [comment, setComment] = useState(init);

  const comments = useSelector((state) => state.detail.comments);
  console.log(comments);

  const onChangeHandler = (e) => {
    setComment((prev) => {
      return { ...prev, nickname: e.target.value };
    });
  };

  const onChangeHandler2 = (e) => {
    setComment((prev) => {
      return { ...prev, body: e.target.value };
    });
  };

  useEffect(() => {
    dispatch(__getCommentList());
  }, [dispatch]);

  return (
    <CommentBox>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(__addComment(comment));
        }}
      >
        <Label>닉네임</Label>
        <Input2
          maxLength="4"
          name="nickname"
          value={comment.nickname}
          onChange={onChangeHandler}
        />
        <Label>내용</Label>
        <Input name="body" value={comment.body} onChange={onChangeHandler2} />
        <button>Add</button>
      </form>
      {comments.map((comment) => {
        return (
          <CommentBox2>
            <h4 key={comment?.id}>{comment.comment}</h4>
            <p>{comment.body}</p>
            <p>&nbsp;수정/삭제</p>
          </CommentBox2>
        );
      })}
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

const CommentBox2 = styled.div`
  padding: 10px;
  margin-left: 40px;
  margin-top: 10px;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: inline-flex;
  justify-content: space-around;
  & p {
    max-width: 20rem;
  }
`;

export default Comment;
