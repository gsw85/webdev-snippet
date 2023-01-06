const { onRequest } = require("firebase-functions/v2/https");
const helloModule = require("./hello");

// cloud function called helloworld will be created
exports.helloworld = onRequest(
  {
    timeoutSeconds: 1200,
    region: ["europe-north1"], // location of cloud function
    cors: ["https://website1.com", "https://www.website2.me"], // which website can access this cloud function
  },
  helloModule.handler
);
