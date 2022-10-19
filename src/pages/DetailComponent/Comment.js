// 작성된 글을 확인시 댓글창을 구현할 페이지입니다
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  __addComment,
  __delComment,
  __updateComment,
  __getCommentList,
} from "../../Redux/modules/detail";

function Comment({ cardId }) {
  const dispatch = useDispatch();
  // 해당 card의 comments 를 useEffect 로 가져옵니다
  const comments = useSelector((state) => state.detail.comments);
  useEffect(() => {
    dispatch(__getCommentList(cardId));
  }, [dispatch, cardId]);

  // 카드 초기 값입니다
  const [comment, setComment] = useState({
    nickname: "",
    body: "",
    cardId: cardId,
    id: "",
  });

  // 코멘드의 아이디를 만들어줍니다
  useEffect(() => {
    setComment((prev) => {
      return { ...prev, id: comments[comments.length - 1]?.id + 1 || 1 };
    });
  }, [comments]);

  // 코멘트 input 부분:
  const [edit, setEdit] = useState(false);
  const [commentEdit, setCommentEdit] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setComment((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // 코멘트 생성하기
  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(__addComment(comment));
    // comment 초기화해주기 (새로고침안할시, 다음 코멘트의 아이디를 수동으로 만들어 줍니다 id + 1)
    setComment({ nickname: "", body: "", cardId: cardId, id: comment.id + 1 });
  };

  return (
    <CommentBox>
      <form onSubmit={(e) => handleAddComment(e)}>
        <Label>닉네임</Label>
        <Input2
          maxLength="4"
          name="nickname"
          value={comment.nickname}
          onChange={onChangeHandler}
        />
        <Label>내용</Label>
        <Input name="body" value={comment.body} onChange={onChangeHandler} />
        <button>Add</button>
      </form>
      {comments.length !== 0 &&
        comments.map((comment) => {
          const { id } = comment;
          console.log(id);
          return (
            <CommentBox2 key={id}>
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
              <Box>
                {/* <button
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                수정
              </button>
              <button onClick={() => dispatch(__delComment(comment.id))}>
                삭제
              </button> */}
              </Box>
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

const Box = styled.div`
  & button {
    border-radius: 10px;
    background-color: white;
    width: 40px;
    height: 25px;
    margin-left: 5px;
  }
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
