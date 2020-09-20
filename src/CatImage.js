import React, { useEffect, useState } from "react";

const CatImage = () => {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    fetch("https://aws.random.cat/meow")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImageUrl(data.file);
      });
  }, []);

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt="Random Cat" style={{ width: "300px" }} />
      )}
    </div>
  );
};

export default CatImage;
