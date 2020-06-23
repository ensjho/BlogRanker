import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
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
    <div className="col-md-8 offset-md-2 mt-4">
      <div className="card">
        <div className="card-header font-weight-bold"><h3>New Post</h3></div>
        <div className="card-body">

          <form className="postForm">
            <label className="mt-2" htmlFor="username" >Title </label>
            <input
              id="title"
              name="title"
              placeholder="Insert Title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
            />
            <div className="error title">{formData.titleError}</div>

            <label className="mt-2" htmlFor="description" >Description </label>
            <textarea
              id="description"
              name="description"
              placeholder="Insert Description"
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
              placeholder="Insert Body"
              className="form-control pb-5"
              value={formData.body}
              onChange={handleChange}
            />
            <div className="error body">{formData.bodyError}</div>


            <div className="float-rightm mt-3">
              <button onClick={handleSubmit} className="btn btn-primary mr-1">
                Submit
                </button>
              <Link to="/">
                <button className="btn btn-primary">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPostForm;
