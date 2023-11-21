const axios = require("axios");
const { PassThrough } = require("stream");
const path = require("path");
const sharp = require("sharp");
const compresser = async (req, uniqueName, formatt) => {
  try {
    const imageUrl = req.body.params.form?.values?.compresser.files.url;

    const imageLoc = path.join(__dirname, `image.${formatt}`);
    const size = req.body.params.form?.values?.size;


    const response = await fetch(imageUrl);
    const format = uniqueName
      .split(".")
      [uniqueName.split(".").length - 1].toLowerCase();
    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();

    const resizedImage = sharp(buffer);
    if (format === "jpg" || format === "jpeg") {
      resizedImage.jpeg({ quality: size });
    } else if (format === "png") {
      resizedImage.png({ quality:10-(size / 10)});
    } else if (format === "webp") {
      resizedImage.webp({ quality: size });
    } else if (format === "gif") {
      resizedImage.gif({ quality: size });
    } else {
      console.log("format error");
    }
    await resizedImage.toFile(`./public/${uniqueName}`);

    console.log("Image resizing and saving complete");
  } catch (error) {
    console.log(error);
  }
};
module.exports = compresser;
