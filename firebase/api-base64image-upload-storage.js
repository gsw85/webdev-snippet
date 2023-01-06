import { adminStorage } from "./firebase-admin";
import stream from "stream";
import uuid from "uuid-v4";

const serverURL = "http://sample.com/api/endpoint";

async function getImageUploadToStorage(
  selectedServer = "",
  stringHash = "",
  userUID = "",
  assetID = "",
  fileName = "",
  uuidToken = ""
) {
  try {
    if (!selectedServer || !stringHash || !userUID || !assetID || !fileName)
      return;

    const fetchResult = await fetch(
      `${selectedServer}/v1/images/${stringHash}.jpg`
    );
    const getBuffer = await fetchResult.buffer();
    const jpgImageStringOly = getBuffer.toString("base64");
    const jpgBuffer = new Buffer.from(jpgImageStringOly, "base64");
    const jpgBufferStream = new stream.PassThrough();
    jpgBufferStream.end(jpgBuffer);

    const fileToUpload = adminStorage.file(
      `users/${userUID}/assets/${assetID}/${fileName}`
    );

    jpgBufferStream
      .pipe(
        fileToUpload.createWriteStream({
          metadata: {
            metadata: {
              contentType: "image/jpeg",
              firebaseStorageDownloadTokens: uuidToken,
            },
          },
          public: true,
        })
      )
      .on("error", (err) => {
        return "Error";
      })
      .on("finish", () => {
        return "complete";
      });
    const encodedFilePath = encodeURIComponent(
      `users/${userWallet}/assets/${assetID}/${fileName}`
    );
    const publicFilePath = `https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_STORAGE}/o/${encodedFilePath}?alt=media&token=${uuidToken}`;
    return publicFilePath;
  } catch (err) {
    console.log(err);
  }
}

export default async function handler(req, res) {
  const selectedServer = serverURL;
  const stringHash = "xxxxxx";
  const userUID = "xxxxxx";
  const assetID = "xxxxx";
  const fileName = "FILE.jpg";
  const uuidToken = uuid();

  const status = await getImageUploadToStorage(
    selectedServer,
    stringHash,
    userUID,
    assetID,
    fileName,
    uuidToken
  );

  res.send(status);
}
