import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __updateComment, __delComment } from "../../Redux/modules/detail";

const CommentListItem = ({ comment }) => {
  const dispatch = useDispatch();
  // 코멘트 input 부분:
  const [edit, setEdit] = useState(false);
  const [commentEdit, setCommentEdit] = useState("");

  // useEffect(() => {
  //   dispatch(__delComment(cardId));
  // }, [dispatch(cardId)]);

  return (
    <CommentBox2>
      <h4 key={comment?.id}>{comment.nickname}</h4>
      {edit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit");
            setCommentEdit(comment.body);
            setEdit(!edit);
            dispatch(
              __updateComment({
                id: comment.id,
                nickname: comment.nickname,
                edit: { body: commentEdit },
              })
            );
            // setEdit(false);
          }}
        >
          <input
            value={commentEdit}
            onChange={(e) => setCommentEdit(e.target.value)}
          />
          <Box>
            <button type="submit">수정</button>
          </Box>
        </form>
      ) : (
        <div>
          <p>{comment.body}</p>
          <Box>
            <button
              onClick={() => {
                setEdit(!edit);
              }}
            >
              수정
            </button>
            <button onClick={() => dispatch(__delComment(comment.id))}>
              삭제
            </button>
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
