import classes from "./NewProject.module.css";
import React, { useState } from "react";

const NewProject = ({ setProjects, setAddProject }) => {
  const [title, setTitle] = useState("");
  const [customerUrl, setCustomerUrl] = useState("");
  const [images, setImages] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCustomerUrlChange = (event) => {
    setCustomerUrl(event.target.value);
  };

  const handleImageChange = (event) => {
    setImages([...images, event.target.files[0]]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Title: title,
      CustomerURL: customerUrl,
      Images: images,
    };
    setProjects((prevProjects) => [data, ...prevProjects]);
    setCustomerUrl("");
    setTitle("");
    setImages(null);
    setAddProject(false);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.overlay}>
      <div className={classes.container}>
        <button
          className={classes.close_button}
          onClick={() => setAddProject((prev) => !prev)}
        >
          X
        </button>
        <div className={classes.container_info}>
          <h2>Add your project </h2>
          <p>Take a few moments to describe your project</p>
        </div>

        <div className={classes.form}>
          <div className={classes.left}>
            <input
              placeholder="📖Project Title"
              type="text"
              maxLength={15}
              value={title}
              onChange={handleTitleChange}
            />

            <input
              placeholder="🔗Customer URL"
              type="url"
              value={customerUrl}
              onChange={handleCustomerUrlChange}
            />
          </div>

          <div className={classes.right}>
            <label>🖼️Images</label>
            <input
              className={classes.input_imgs}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className={classes.showcase_img}>
              {images.length <= 0 ? (
                <p>No images</p>
              ) : (
                images.map((img, index) => {
                  return (
                    <img
                      className={classes.img}
                      key={index}
                      src={URL.createObjectURL(img)}
                      alt={`img ${index}`}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
        <button className={classes.submit_button} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewProject;
