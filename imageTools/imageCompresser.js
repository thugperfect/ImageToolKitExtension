const sharp = require("sharp");
const compresser = async (req, uniqueName, format) => {
  try {
    let imageUrl;
    if (req.body.params?.form?.values?.compresser) {
      imageUrl = req.body.params.form?.values?.compresser?.files?.url;
    } else {
      imageUrl = req.body.params?.messages?.list[0].file.url;
    }
    
    const size = req.body.params.form?.values?.size.value;
    let quality;
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    switch (size) {
      case "high": {
        quality = 75;
        break;
      }
      case "medium": {
        quality = 50;
        break;
      }
      case "low": {
        quality = 25;
        break;
      }
    }

    const resizedImage = sharp(buffer);
    if (format === "jpg" || format === "jpeg") {
      resizedImage.jpeg({ quality: quality });
    } else if (format === "png") {
      resizedImage.png({ quality: 9-Math.floor(quality/10) });
    } else if (format === "webp") {
      resizedImage.webp({ quality: quality });
    } else if (format === "gif") {
      resizedImage.gif({ quality: quality });
    } else {
      console.log("format error");
    }
    await resizedImage.withMetadata().toFile(`./public/${uniqueName}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = compresser;
