const axios = require("axios");
const memeCreator = async (img, top, bottom, font) => {
  const postData = {
    background: img,
    style: "string",
    text: [top, bottom],
    layout: "string",
    font: font,
    extension: "string",
    redirect: false,
  };

    const response = await axios.post(
      "https://api.memegen.link/images/custom",
      postData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return {
      slides: [
        {
          type: "images",
          title: "Meme Creator",
          data: [response.data.url],
        },
      ],
      text: "# ImageToolKit",
    };
  
};
module.exports = memeCreator;
