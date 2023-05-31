import React, { useState, useEffect } from "react";
import CreateComment from "./CreateComment";
import DeleteComment from "./DeleteComment";

function GetArticleId({ postId, token, role, UserId }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [showCreateComment, setShowCreateComment] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8100/api/v1/getPost/${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch post");
      })
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        // Handle the error
      });
  }, [postId]);

  useEffect(() => {
    fetch(`http://localhost:8100/api/v1/getAllCommentPost/${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch comments");
      })
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        // Handle the error
      });
  }, [postId]);

  const handleCommentCreated = () => {
    // Refresh comments after a new comment is created
    fetch(`http://localhost:8100/api/v1/getAllCommentPost/${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch comments");
      })
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        // Handle the error
      });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  function CreateCommen() {
    if (!role) {
      window.location.href = "/Authentication"; // router.push
      return;
    }
    if (role == "ROLE_USER") {
      return (
        <CreateComment
          postId={postId}
          token={token}
          onCommentCreated={handleCommentCreated}
        />
      );
    }
    return <p>You are not allowed to comment.</p>;
  }

  const handleCommentDelete = (commentId) => {
    // Perform delete action here
    console.log(`Deleting comment with ID: ${commentId}`);
  };

  return (
    <div>
      {console.log(role)}
      <h2>Title: {post.title}</h2>
      <p>Description: {post.description}</p>
      <p>Wilaya: {post.wilaya}</p>
      <p>Localisation: {post.localisation}</p>
      <p>Date created: {post.createdDate}</p>
      <p>Nom Blogger: {post.userName}</p>
      <button onClick={() => setShowCreateComment(true)}>
        {" "}
        CreateComment{" "}
      </button>
      {showCreateComment && CreateCommen()}
      {/* <h3>Comments:</h3>
      {comments.map((comment) => (
        <div key={comment.commentId}>
          <p>Comment ID: {comment.commentId}</p>
          <p>Description: {comment.description}</p>
          <p>Created Date: {comment.createdDate}</p>
          <p>User Name: {comment.userName}</p>
          {comment.UserId === UserId && (
            <button onClick={() => handleCommentDelete(comment.commentId)}>Delete Comment</button>
          )}
        </div>
      ))} */}
    </div>
  );
}

export default GetArticleId;
