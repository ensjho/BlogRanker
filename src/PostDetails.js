import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import Comments from "./Comments"

function PostDetail({ posts, setPosts }) {
  const { id } = useParams();
  const history = useHistory();
  const [onEditPage, setOnEditPage] = useState(false);
  const post = posts.filter(post => post["id"] === id);

  const initialFormData = {
    title: post[0].title,
    description: post[0].description,
    body: post[0].body
  }  

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const gatherInput = evt => {
    evt.preventDefault();
      const nonDeletedPosts = posts.filter(post => post["id"] !== id);
      nonDeletedPosts.push({...formData, id});

      setPosts(nonDeletedPosts);
      setFormData(initialFormData);
      setOnEditPage(false);
  };


  const handleDelete = () => {
    const nonDeletedPosts = posts.filter(post => post["id"] !== id);
    setPosts(nonDeletedPosts);
    history.push("/")
  }

  const handleEditToggle = () => {
    setOnEditPage(old => !old);
  }

  const postDetailPage =
    <div>
      <h1>{post[0].title} </h1>
      <h5>
        {post[0].description}
      </h5>
      <h5>
        {post[0].body}
      </h5>

      <button onClick={handleDelete}> Remove </button>
      <button onClick={handleEditToggle}> Edit</button>
      <div>
        <Comments/>
      </div>
    </div>

  const updatePostPage = 
    <div>
       <section className="postFormArea">
      <div>
        <div>
          <div className="headerPost">
            Edit Post
          </div>
          <div>
            <form className="postForm" >
              <div className="form-group">
              </div>
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
                <div className="error description">{formData.descriptionError}</div>
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

  return (
    <div>
     {onEditPage? updatePostPage :postDetailPage}
    </div>
  )
}

export default PostDetail;