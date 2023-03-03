import classes from "./NewProject.module.css";

import React, { useState } from "react";

const EditProject = ({ data, projects, setProjects, setEdit }) => {
  const { Title, CustomerURL, Images, id } = data;
  const [title, setTitle] = useState(Title);
  const [customerUrl, setCustomerUrl] = useState(CustomerURL);
  const [images, setImages] = useState(Images);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDelete = (index) => {
    const newImgs = images.filter((img, i) => index !== i);
    setImages(newImgs);
  };

  const handleCustomerUrlChange = (event) => {
    setCustomerUrl(event.target.value);
  };

  const handleImageChange = (event) => {
    setImages([...images, event.target.files[0]]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      Title: title,
      CustomerURL: customerUrl,
      Images: images,
      id: id,
    };
    setProjects(
      projects.map((current) =>
        current.id === newProject.id ? { ...newProject } : current
      )
    );
    setEdit((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.overlay}>
      <div className={classes.container}>
        <button
          className={classes.close_button}
          onClick={() => setEdit((prev) => !prev)}
        >
          X
        </button>
        <div className={classes.container_info}>
          <h2>Edit your project</h2>
        </div>

        <div className={classes.form}>
          <div className={classes.left}>
            <input
              placeholder="📖Project Title"
              type="text"
              maxLength={15}
              required={true}
              value={title}
              onChange={handleTitleChange}
            />

            <input
              placeholder="🔗Customer URL"
              type="url"
              required={true}
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
                    <div className={classes.card} key={index}>
                      <img
                        className={classes.img}
                        key={index}
                        src={URL.createObjectURL(img)}
                        alt={`img ${index}`}
                      />
                      <button
                        className={classes.delete_img}
                        onClick={() => handleDelete(index)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <button className={classes.submit_button} type="submit">
          Edit
        </button>
      </div>
    </form>
  );
};

export default EditProject;
