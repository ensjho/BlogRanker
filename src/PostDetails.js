import React, { useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Comments from "./Comments";
import { addComment, deleteComment } from "./actions";

function PostDetail({ posts, editPost, deletePost }) {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [onEditPage, setOnEditPage] = useState(false);
  // const post = posts.filter((post) => post["id"] === id);
  const post = posts[id];
  console.log("RERENDER POSTDETAIL");
  console.log("POST IS", post);
  console.log("COMMENTS IN POSTDETAILS IS", post.comments);

  let initialFormData;
  post
    ? (initialFormData = {
        title: post.title,
        description: post.description,
        body: post.body,
      })
    : (initialFormData = {
        title: "",
        description: "",
        body: "",
      });

  const [formData, setFormData] = useState(initialFormData);

  if (!post) return <Redirect to="/"></Redirect>;

  const addBlogComment = (comment) => {
    dispatch(addComment(id, comment));
  };

  const deleteBlogComment = (commentId) => {
    dispatch(deleteComment(id, commentId));
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    // const nonDeletedPosts = posts.filter((post) => post["id"] !== id);
    // nonDeletedPosts.push({ ...formData, id });

    editPost({ ...formData, id, comments: { ...post.comments } });
    // setFormData(initialFormData);
    setOnEditPage(false);
  };

  const handleDelete = () => {
    // const nonDeletedPosts = posts.filter((post) => post["id"] !== id);
    // setPosts(nonDeletedPosts);
    deletePost(post);
    history.push("/");
  };

  const handleEditToggle = () => {
    setOnEditPage((old) => !old);
  };

  const postDetailPage = (
    <div>
      <h1>{post.title} </h1>
      <h5>{post.description}</h5>
      <h5>{post.body}</h5>

      <button onClick={handleDelete}> Remove </button>
      <button onClick={handleEditToggle}> Edit</button>
      <div>
        <Comments
          postId={id}
          addComment={addBlogComment}
          deleteComment={deleteBlogComment}
        />
      </div>
    </div>
  );

  const updatePostPage = (
    <div>
      <section className="postFormArea">
        <div>
          <div>
            <div className="headerPost">Edit Post</div>
            <div>
              <form className="postForm">
                <div className="form-group"></div>
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <div>
                    <input
                      id="title"
                      name="title"
                      placeholder="titlte"
                      className="form-control"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <div>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Description"
                      className="form-control"
                      value={formData.description}
                      onChange={handleChange}
                    />
                    <div className="error description">
                      {formData.descriptionError}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="body">Body</label>
                  <div>
                    <textarea
                      id="body"
                      name="body"
                      placeholder="body"
                      className="form-control"
                      value={formData.body}
                      onChange={handleChange}
                    />
                    <div className="error body">{formData.bodyError}</div>
                  </div>
                </div>
                <div>
                  <button onClick={gatherInput} className="saveButton">
                    Save
                  </button>
                  <button onClick={handleEditToggle} className="cancelButton">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return <div>{onEditPage ? updatePostPage : postDetailPage}</div>;
}

export default PostDetail;
