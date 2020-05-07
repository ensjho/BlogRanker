import React, { useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Comments from "./Comments";
import { addComment, deleteComment } from "./actions";
import PostEditForm from "./PostEditForm";
import PostDisplay from "./PostDisplay"

/** Renders details about the post when onEditPage is set to False;
 *  Renders editing form for the post when onEditPage is set to True;
 *  onEditPage state is toggled by a button.
 */
function Post({ posts, editBlogPost, deleteBlogPost }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  //State for toggling between edit and detail page.
  const [onEditPage, setOnEditPage] = useState(false);
  const post = posts[id];

  // if post does not exist, redirect to Home page.
  if (!post) return <Redirect to="/" />

  const addBlogComment = (comment) => {
    dispatch(addComment(id, comment));
  };

  const deleteBlogComment = (commentId) => {
    dispatch(deleteComment(id, commentId));
  };

  const handleDelete = () => {
    deleteBlogPost(post);
    history.push("/");
  };

  //Toggle between setOnEditPage state
  const handleEditToggle = () => {
    if (!onEditPage) {
      setOnEditPage((old) => !old);
    };
  }
  
  return (
    <div>
      {onEditPage ? <PostEditForm
        post={post}
        setOnEditPage={setOnEditPage}
        editBlogPost={editBlogPost}
        handleEditToggle={handleEditToggle}
      />
        : <div>
            <div>
              <PostDisplay
                post={post}
                handleDelete={handleDelete}
                handleEditToggle={handleEditToggle}
              />
            </div>
            <div>
              <Comments
                postId={id}
                addBlogComment={addBlogComment}
                deleteBlogComment={deleteBlogComment}
              />
            </div>
          </div>
      }
    </div>
  )
}

export default Post;
