import React, { useEffect, useState } from "react";

const DogImage = () => {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt="Random Dog" style={{ width: "300px" }} />
      )}
    </div>
  );
};

export default DogImage;
