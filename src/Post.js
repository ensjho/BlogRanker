import React, { useState, useEffect } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import Comments from "./Comments";
import {
  getPostFromAPI,
  addCommentToAPI,
  deleteCommentFromAPI,
  clearError
} from "./actions";
import PostEditForm from "./PostEditForm";
import PostDisplay from "./PostDisplay";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

/** Renders details about the post when onEditPage is set to False;
 *  Renders editing form for the post when onEditPage is set to True;
 *  onEditPage state is toggled by a button.
 */
function Post({ editBlogPost, deleteBlogPost }) {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((st) => st.posts[id], shallowEqual);
  const error = useSelector((st) => st.posts.error);

  //State for toggling between edit and detail page.
  const [onEditPage, setOnEditPage] = useState(false);

  useEffect(() => {
    dispatch(getPostFromAPI(id))
  }, [dispatch, id, onEditPage]);

  useEffect(() => {
    if (post) setIsLoading(false)
  }, [post]);

  //TODO: id as error inside of component to see error equals to id;

  // if post does not exist, redirect to Home page.
  if (error){
    debugger
  return <Redirect to="/" />}

  const addBlogComment = (comment) => {
    dispatch(addCommentToAPI(comment, id));
  };

  const deleteBlogComment = (commentId) => {
    dispatch(deleteCommentFromAPI(commentId, id));
  };

  const handleDelete = () => {
    deleteBlogPost(id);
    history.push("/");
  };

  //Toggle between setOnEditPage state
  const handleEditToggle = () => {
    if (!onEditPage) {
      setOnEditPage((old) => !old);
    }
  };

  const renderPost = () => {
    return (
      <div>
        {onEditPage ? (
          <PostEditForm
            post={post}
            setOnEditPage={setOnEditPage}
            editBlogPost={editBlogPost}
            handleEditToggle={handleEditToggle}
          />
        ) : (
            <div>
              <div>
                <PostDisplay
                  post={post}
                  handleDelete={handleDelete}
                  handleEditToggle={handleEditToggle}
                />
              </div>
              <div>
                <Comments
                  comments={post.comments}
                  addBlogComment={addBlogComment}
                  deleteBlogComment={deleteBlogComment}
                />
              </div>
            </div>
          )}
      </div>
    );
  };

  return isLoading ? <p>Loading...</p> : renderPost();
}

export default Post;
