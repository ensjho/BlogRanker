import React, { useState } from "react";
import "../CSS/editForm.css"


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
    setTimeout(function(){setOnEditPage(false)},500);
  };

  return (
    <div>
      <section className="postFormArea">
        <div>
          <div>
            <div className="headerPost">Edit Post</div>
            <div>
              <form className="editForm">
                <div className="form-group"></div>
                <div className="form-group">
                  <div>
                    <input
                      id="title"
                      name="title"
                      placeholder="Titlte"
                      className="form-control"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
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
                  <div>
                    <textarea
                      id="body"
                      name="body"
                      placeholder="Body"
                      className="form-control"
                      value={formData.body}
                      onChange={handleChange}
                    />
                    <div className="error body">{formData.bodyError}</div>
                  </div>
                </div>
                <div>
                  <button onClick={handleEditSubmit} className="saveButton">
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
}

export default PostEditForm;
