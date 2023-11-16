const helpResponse = {
  text: "# Help",
  slides: [
    {
      type: "text",
      title: "# imageToolKit",
      data: 'ImageToolkit is a Cliq extension that provides various image operations, including image format conversion, dynamic image compression, and grayscale conversion.\n\n## Getting Started\n\n1. *Installation:*\n   - Install the extension in your Cliq Marketplace.\n\n2. *Accessing the Extension:*\n   - Search for ImageToolkitBot\n\n## Usage\n\n1. *Choose an Operation:*\n   - Click on "ImageOperations" in the extension popup.\n   - Choose the desired image operation, such as image converter, compressor, etc.\n\n2. *Upload and Convert:*\n   - Upload the image you want to process.\n   - Provide any necessary details for the conversion.\n   - Submit the form.\n\n3. *View Rendered Image:*\n   - The response URL is provided. Open it to view the rendered image in a new tab.\n\n4. *Save Rendered Image:*\n   - In the new tab, right-click on the rendered image.\n   - Select "Save Image As..." to save the processed image to your device.',
    },
  ],
};

const optionsResponse = {
  type: "form",
  title: "ImageToolkit",
  name: "options",
  button_label: "Next",
  inputs: [
    {
      name: "options",
      label: "Select Image operation",
      placeholder: "Choose from the list of options",
      multiple: false,
      mandatory: false,
      type: "select",
      options: [
        {
          value: "pdfconverter",
          label: "Images to PDF",
        },
        {
          value: "converter",
          label: "Image Converter",
        },
        {
          value: "compresser",
          label: "Image Compresser",
        },
        {
          value: "grayscale",
          label: "Gray Scale",
        },
      ],
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};
const funResponse = {
  type: "form",
  title: "ImageToolkit",
  name: "options",
  button_label: "Next",
  inputs: [
    {
      name: "options",
      label: "Select Image operation",
      placeholder: "Choose from the list of options",
      multiple: false,
      mandatory: false,
      type: "select",
      options: [
        {
          value: "anime",
          label: "Anime Emoji Generator",
        },
        {
          value: "meme",
          label: "Memes Generator",
        },
        {
          value: "memeCreator",
          label: "Meme Creator",
        },
      ],
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};
const converterResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "converter",
  hint: "convert Image from JPG, JPEG, PNG ,... to any of the formats ",
  button_label: "Render",
  inputs: [
    {
      name: "converter",
      label: "Select image to be converted",
      placeholder: "Please upload a image (.jpg, .jpeg, .png, ....)",
      mandatory: true,
      type: "file",
    },
    {
      name: "format",
      label: "Formats",
      placeholder: "Choose from the list of options",
      multiple: false,
      mandatory: true,
      type: "select",
      options: [
        {
          value: "jpg",
          label: "JPG",
        },
        {
          value: "jpeg",
          label: "JPEG",
        },
        {
          value: "png",
          label: "PNG",
        },
        {
          value: "svg",
          label: "SVG",
        },
        {
          value: "gif",
          label: "GIF",
        },
      ],
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};
const animeResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "anime",
  hint: "Select emotion to get an Anime emoji",
  button_label: "GO!",
  inputs: [
    {
      name: "dynamic_select",
      label: "Choose Emotion 👇",
      placeholder: "Choose from the list of options",
      multiple: false,
      mandatory: false,
      type: "dynamic_select",
      options: [
        {
          value: "angry",
          label: "angry",
        },
        {
          value: "calm-down",
          label: "calm-down",
        },
        {
          value: "confused",
          label: "confused",
        },
        {
          value: "dance",
          label: "dance",
        },
        {
          value: "pre-exercise",
          label: "pre-exercise",
        },
        {
          value: "happy",
          label: "happy",
        },
        {
          value: "lunch-break-time",
          label: "lunch-break-time",
        },
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "misc",
          label: "misc",
        },
        {
          value: "no",
          label: "no",
        },
        {
          value: "thinking",
          label: "thinking",
        },
        {
          value: "sad",
          label: "sad",
        },
        {
          value: "smug",
          label: "smug",
        },
        {
          value: "surprised",
          label: "surprised",
        },
        {
          value: "yes",
          label: "yes",
        },
      ],
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};

const memeResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "meme",
  hint: "Memes Generator",
  button_label: "GO!",
  inputs: [
    {
      name: "text",
      label: "Search by Meme....",
      placeholder: "Keep it short",
      min_length: "0",
      max_length: "25",
      mandatory: false,
      type: "text",
    },
    {
      name: "toggle",
      label: "Safe Search",
      value: false,
      type: "toggle",
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};

const compresserResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "compresser",
  hint: "Compress Size of Image without reducing the Quality",
  button_label: "Render",
  inputs: [
    {
      name: "compresser",
      label: "Select image to be compressed",
      placeholder: "Please upload a image (.jpg, .jpeg, .png, ....)",
      mandatory: true,
      type: "file",
    },
    {
      name: "size",
      label: "Quality %",
      placeholder: "0 - 100%",
      min: "0",
      max: "100",
      mandatory: true,
      type: "number",
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};
const pdfResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "pdfconverter",
  hint: "Convert multiple images to a PDF",
  button_label: "Render",
  inputs: [
    {
      name: "pdfconverter",
      label: "Select image to be changed",
      placeholder: "Please upload a image (.jpg, .jpeg, .png)",
      multiple: true,
      mandatory: true,
      type: "file",
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};
const grayScaleResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "grayscale",
  hint: "Convert Color Images into Grayscale images",
  button_label: "Render",
  inputs: [
    {
      name: "grayscale",
      label: "Select image to be changed",
      placeholder: "Please upload a image (.jpg, .jpeg, .png, ...)",
      mandatory: true,
      type: "file",
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};

const ImageResponse = (name, url) => {
  return {
    text: `# ${name}`,
    slides: [
      {
        type: "text",
        title: "ImageToolKit",
        buttons: [
          {
            label: "go to image",
            type: "+",
            action: {
              type: "open.url",
              data: { web: url },
            },
          },
        ],
        data: "Converted Image...",
      },
      {
        type: "text",
        title: "",
        data: "if it doesn't work...\nwait for few seconds, Image is rendering",
      },
      {
        type: "text",
        title: "hint",
        data: "- click on 'go to image'\n- right click on image and click on 'save image as'",
      },
      {
        type: "text",
        title: "note",
        data: "The Larger the image size => more the waiting time",
      },
    ],
  };
};
const pdfResultResponse = (name, url) => {
  return {
    text: `# ${name}`,
    slides: [
      {
        type: "text",
        title: "ImageToolKit",
        buttons: [
          {
            label: "Open PDF",
            type: "+",
            action: {
              type: "open.url",
              data: { web: url },
            },
          },
        ],
        data: "Converted PDF...",
      },
      {
        type: "text",
        title: "",
        data: "if it doesn't work...\nwait for few seconds, PDF is rendering",
      },
      {
        type: "text",
        title: "note",
        data: "The Larger the image size => more the waiting time\n*It is recomended to compress images before converting into PDF*",
      },
    ],
  };
};
const errorResponse = {
  text: "# Error",
  slides: [
    {
      type: "text",
      title: "ImageToolKit",
      data: "Sorry Error Occured!\ntry again...",
    },
  ],
};

module.exports = {
  helpResponse,
  optionsResponse,
  converterResponse,
  compresserResponse,
  grayScaleResponse,
  ImageResponse,
  errorResponse,
  pdfResponse,
  pdfResultResponse,
  funResponse,
  animeResponse,
  memeResponse,
};
