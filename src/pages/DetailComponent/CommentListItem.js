import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __updateComment, __delComment } from "../../Redux/modules/detail";

const CommentListItem = ({ comment }) => {
  const [editedComment, setEditedComment] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setEditedComment(comment);
  }, [comment]);

  // 수정 열고 닫기
  const [isEdit, setIsEdit] = useState(false);
  const handleOpen = () => {
    setIsEdit(!isEdit);
  };

  // input 부분
  const [editInput, setEditInput] = useState("");
  const handleOnChange = (e) => {
    setEditInput(e.target.value);
    setEditedComment((prev) => {
      return { ...prev, body: e.target.value };
    });
  };

  // 댓글 수정하기
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(__updateComment(editedComment));
    setIsEdit(false);
  };

  // 댓글 삭제하기
  const handleDelete = () => {
    dispatch(__delComment(editedComment));
  };

  return (
    <CommentBox2>
      <h4 key={comment?.id}>{comment.nickname}</h4>
      {isEdit ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <input value={editInput} onChange={(e) => handleOnChange(e)} />
          <Box>
            <button type="submit">수정</button>
          </Box>
        </form>
      ) : (
        <div>
          <p>{comment.body}</p>
          <Box>
            <button onClick={handleOpen}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </Box>
        </div>
      )}
    </CommentBox2>
  );
};

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
const Box = styled.div`
  & button {
    border-radius: 10px;
    background-color: white;
    width: 40px;
    height: 25px;
    margin-left: 5px;
  }
`;

export default CommentListItem;
