const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
  const myFile = fileName.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    // Replace the <My_Bucket_Name> with the name of your own S3 bucket
    Bucket: "lakers-offseason9de3a354-6862-4339-bde3-285958d5e65d",
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
    ACL: 'public-read', //allow read access
  };

  return imageParams;
};

module.exports = params;
