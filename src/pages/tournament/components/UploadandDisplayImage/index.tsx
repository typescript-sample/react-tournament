import React, { useState } from "react";
import "./style.css";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1 className="upload_image-text">Tourament Logo</h1>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event: any) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
