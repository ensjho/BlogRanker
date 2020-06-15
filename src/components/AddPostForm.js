import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../CSS/AddPostForm.css";
import { addPostToAPI } from "../actions/actions";
import { useDispatch } from "react-redux";

const initialFormData = {
  title: "",
  description: "",
  body: "",
  titleError: "",
  descriptionError: "",
  bodyError: "",
};

/** Form for adding a new post */
function AddPostForm() {
  const [formData, setFormData] = useState(initialFormData);
  const history = useHistory();
  const dispatch = useDispatch();

  const addBlogPost = (post) => {
    dispatch(addPostToAPI(post));
  };

  /** Validate inputs in the Form
   *  The client must fill out each inputs
   */
  const validateInputs = () => {
    let titleError = "";
    let descriptionError = "";
    let bodyError = "";

    if (!formData.title) titleError = "Title(Text) Required";
    if (!formData.description) descriptionError = "Description(Text) Required";
    if (!formData.body) bodyError = "Body(Text) Required";

    if (titleError || descriptionError || bodyError) {
      setFormData({ ...formData, titleError, descriptionError, bodyError });
      return false;
    }
    return true;
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Invoke validation method
    let validation = validateInputs();
    // If all the inputs are filled in,
    if (validation) {
      addBlogPost(formData);
      //clear form
      setFormData(initialFormData);
      //Send the client back to the home page if the form is submitted.
      history.push("/");
    }
  };

  return (
    <section >
      <div className="postFormArea">
          <div className="headerPost">Add a New Post</div>
          <div>
            <form className="postForm">
              <div className="form-group">
                <div>
                  <input
                    id="title"
                    name="title"
                    placeholder="Insert Title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  <div className="error title">{formData.titleError}</div>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Insert Description"
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
                    placeholder="Insert Body"
                    className="form-control"
                    value={formData.body}
                    onChange={handleChange}
                  />
                  <div className="error body">{formData.bodyError}</div>
                </div>
              </div>
              <div>
                <button onClick={handleSubmit} className="saveButton">
                  Submit
                </button>
                <Link to="/">
                  <button className="cancelButton">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
      </div>
    </section>
  );
}

export default AddPostForm;
