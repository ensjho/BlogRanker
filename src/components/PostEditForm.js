import React, { useState } from "react";

//Form to edit existing post: renders only if setOnEdit staet is set as True
function PostEditForm({ post, setOnEditPage, editBlogPost, handleEditToggle }) {
  const InitalFormData = {
    title: post.title,
    description: post.description,
    body: post.body,
  };

  const [formData, setFormData] = useState(InitalFormData);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    editBlogPost(formData, post.id);
    setTimeout(function () { setOnEditPage(false) }, 500);
  };

  return (

    <div className="col-md-8 offset-md-2 mt-4">
      <div className="card">
        <div className="card-header font-weight-bold"><h3> Edit Post</h3></div>
        <div className="card-body">
            <form className="editForm">
              <label className="mt-2" htmlFor="username" >Title </label>
              <input
                id="title"
                name="title"
                placeholder="Titlte"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
              />

              <label className="mt-2" htmlFor="description" >Description </label>

              <textarea
                id="description"
                name="description"
                placeholder="Description"
                className="form-control pb-5"
                value={formData.description}
                onChange={handleChange}
              />
              <div className="error description">
                {formData.descriptionError}
              </div>

              <label className="mt-2" htmlFor="body" >Body </label>

              <textarea
                id="body"
                name="body"
                placeholder="Body"
                className="form-control pb-5"
                value={formData.body}
                onChange={handleChange}
              />
              <div className="error body">{formData.bodyError}</div>

            <div className="float-rightm mt-3">
                <button onClick={handleEditSubmit} className="btn btn-primary mr-1">
                  Save
                  </button>
                <button onClick={handleEditToggle} className="btn btn-primary">
                  Cancel
                  </button>
              </div>

            </form>
          </div>
        </div>
      </div>
  );
}

export default PostEditForm;
