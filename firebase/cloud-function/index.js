const { onRequest } = require("firebase-functions/v2/https");
const helloModule = require("./hello");

exports.helloworld = onRequest(
  {
    timeoutSeconds: 1200,
    region: ["europe-north1"],
    cors: ["https://website1.com", "https://www.website2.me"],
  },
  helloModule.handler
);
