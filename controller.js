const converter = require("./imageTools/imageConverter");
const compresser = require("./imageTools/imageCompresser");
const serverUrl = require("./config");
const grayscale = require("./imageTools/grayScale");
const {
  helpResponse,
  optionsResponse,
  converterResponse,
  compresserResponse,
  grayScaleResponse,
  errorResponse,
  ImageResponse,
} = require("./responses");

const controller = async (req, res) => {
  if (req.body.params?.form?.values?.converter) {
    try {
      const format = req.body.params.form?.values?.format.value;
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;

      const convert = await converter(req, uniqueName);
      const url = `${serverUrl}/${uniqueName}`;
      const resp = ImageResponse("Image Format Converter",url);

      res.status(200).json({
        output: resp,
      });
    } catch (error) {
      const resp = errorResponse;
      res.status(200).json({
        output: resp,
      });
    }
  }
  if (req.body.params?.form?.values?.compresser) {
    try {
      const imageName = req.body.params.form?.values?.compresser.files.name;
      const format = imageName.split(".")[imageName.split(".").length - 1];
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;

      const compress = await compresser(req, uniqueName, format);
      const url = `${serverUrl}/${uniqueName}`;
      const resp = ImageResponse("Image Compresser",url);

      res.status(200).json({
        output: resp,
      });
    } catch (error) {
      const resp = errorResponse;
      res.status(200).json({
        output: resp,
      });
    }
  }
  if (req.body.params?.form?.values?.grayscale) {
    try {
      const imageName = req.body.params.form?.values?.grayscale.files.name;
      const format = imageName.split(".")[imageName.split(".").length - 1];
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;

      const grayscaleConverter = await grayscale(req, uniqueName, format);
      const url = `${serverUrl}/${uniqueName}`;
      const resp = ImageResponse("Grayscale Converter",url);

      res.status(200).json({
        output: resp,
      });
    } catch (error) {
      const resp = errorResponse;
      res.status(200).json({
        output: resp,
      });
    }
  }

  if (req.body.params?.form?.name === "options") {
    switch (req.body.params?.form?.values?.options?.value) {
      case "converter": {
        const response = converterResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "compresser": {
        const response = compresserResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "grayscale": {
        const response = grayScaleResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
    }
  }

  if (req.body.handler.name === "ImageOperations") {
    const response = optionsResponse;
    res.status(200).json({
      output: response,
    });
  }
  if (req.body.handler.name === "Help") {
    const response = helpResponse;
    res.status(200).json({
      output: response,
    });
  }
};
module.exports = controller;
