import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { Link } from "react-router-dom";
import "./AddPostForm.css"

/** Form for adding a new post */

const initialFormData = {
  title: "",
  description: "",
  body: "",
  // titleError: "",
  // descriptionError: "",
  // bodyError: ""
}

function AddPostForm({ addPost }) {
  const [formData, setFormData] = useState(initialFormData);
  const [addedSuccess, setAddedSucess] = useState(null);

  const history = useHistory();


  // /** Validate inputs in the Form */
  // const validateInputs = () => {
  //   //clear any success messages from previous request
  //   setAddedSucess(null);

  //   let titleError = "";
  //   let descriptionError = "";
  //   let bodyError = "";

  //   if (!formData.name) titleError = "Title(Text) Required";
  //   if (!formData.description) descriptionError = "Description(Text) Required"
  //   if (!formData.recipe) bodyError = "Body(Text) Required";

  //   if (titleError || descriptionError || bodyError) {
  //     setFormData({ ...formData, titleError, descriptionError, bodyError });
  //     return false
  //   }
  //   return true
  // }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const gatherInput = evt => {
    evt.preventDefault();
    //Invoke validation method
    // let validation = validateInputs();
    // If all the inputs are filled in,
    // if (validation) {
      //Adding ID (following the format specified in backend )
      addPost({...formData, id: uuid() });
      //clear form
      setFormData(initialFormData);
      //add success message
      setAddedSucess(<div className="menuAdded text-center"> Item added! </div>)
      history.push("/");
    // }
  };

  return (
    <section className="postFormArea">
      <div>
        <div>
          <div className="headerPost">
            Add Post
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
                  <div className="error title">{formData.titleError}</div>
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
                <Link to="/">
                  <button className="cancelButton">
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
            {addedSuccess}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddPostForm;
