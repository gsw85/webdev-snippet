import axios from "axios";
import uuid from "uuid-v4";
import { jpgImageStringOly, jpgImageFull } from "./images/base64-image";
import sampleImage from "./images/sample.jpg";
import { adminStorage } from "./initialize-admin";
import * as stream from "stream";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
};

export default async function handler(req, res) {
  const buffer = new Buffer.from(jpgImageStringOly, "base64");
  const bufferStream = new stream.PassThrough();
  bufferStream.end(buffer);

  const file = adminStorage.file("testing.jpg");

  bufferStream
    .pipe(
      file.createWriteStream({
        metadata: {
          metadata: {
            contentType: "image/jpeg",
            firebaseStorageDownloadTokens: uuid(),
          },
        },
        public: true,
      })
    )
    .on("error", function (err) {})
    .on("finish", function () {
      res.send("complete");
      // The file upload is complete.
    });
}

/// downloaded URL =
// filepath = encodeURIComponent("folder/files.jpg")
// https://firebasestorage.googleapis.com/v0/b/nproj-nudi5.appspot.com/o/users%2F0x23C32A94F70d7881D18a1F59FA8aDcbc971fEadd%2Fprofile%2Favatar.png?alt=media&token=a8348d5d-7553-4901-bf55-9f1ff55cb731
// totalfilepath = "https://firebasestorage.googleapis.com/v0/b/nproj-nudi5.appspot.com/o/"+${filepath}+"?alt=media&token="${uuid()}
