import NodeRSA from "node-rsa";

const cryptoKey = {
  public:
    "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsTfq/9UbdvRbz5mUmzoF\nCnUiFRJ8y8yvuKxmT/FtrEp0crJAo8dbqFezX3hyYhkDfmINXLfog+2drwBHKTsW\nnp+WDvkqRlTFgUFmNckpmCOFXtcgbMelSvem6+1COrqxZjpjAmeLIzs3qgu3YnL1\nHQCu550qHed2W0sQsV3zW0I1yb84GPC6hitBkooF2H0Xz1KyNHhEIXJBtxqeWgDe\nG7+oivGl6oygdglGVuJqLDcLKWyJDjc6UMsP+wh3n6g4BtO7M75WFEPxlom5fx3T\nkba7gemJ2xOOymnNy3l44ktK46j2e62BVAzn82ISsp9w2nRfJfrTGoXfl6u5V5I1\n+QIDAQAB\n-----END PUBLIC KEY-----\n",
  privateKey:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxN+r/1Rt29FvP\nmZSbOgUKdSIVEnzLzK+4rGZP8W2sSnRyskCjx1uoV7NfeHJiGQN+Yg1ct+iD7Z2v\nAEcpOxaen5YO+SpGVMWBQWY1ySmYI4Ve1yBsx6VK96br7UI6urFmOmMCZ4sjOzeq\nC7dicvUdAK7nnSod53ZbSxCxXfNbQjXJvzgY8LqGK0GSigXYfRfPUrI0eEQhckG3\nGp5aAN4bv6iK8aXqjKB2CUZW4mosNwspbIkONzpQyw/7CHefqDgG07szvlYUQ/GW\nibl/HdORtruB6YnbE47Kac3LeXjiS0rjqPZ7rYFUDOfzYhKyn3DadF8l+tMahd+X\nq7lXkjX5AgMBAAECggEAURYfWfiFzQto2NfSRaYp+Ut4EUE4xb09p9eGJsz2XA9j\nMbm61tVYbHHYWnYPjDAax6CQsZxacMbvz8tmRAjLxD+L1wUN4UlXZ1lnrXOCKyER\nnL/9D5jX2jHvd+LC24Fhuz863zZGVRP617ztp0enPKJ75PEl/LHUF1iE5krxFw80\n3wjy/R/uMpnYFA125lt/yTBOr9AQl1G1ThgxQURsabT3LKY3xZmddHY4zij6dfPt\nC5Z9F6qkW+JQAG0rXV5X/ucGFTViWco4J5F+RNEPXLjZ8Fjpcdw94sYuXgGhsSxv\ndVH/m1GcKiM/+HwSlhwOjwkqZiYWLodR9V4n1QGaYwKBgQDMmPET/qdGe5LWLTr/\nzAh56t3v0oCqUPjbe+6Mq7sajPmgO/h3tJnZgk9EP+Rn2HWR0sea8e8wJzO2yQA0\nYnR6DT9Ww+IIalm1BGlFYg8a0J5kwR6qUtbDPu6mNTmxIIwSrTfYg0KFXP1ZR/9i\ndIAHWicuN1JFRl/2BaoebtmehwKBgQDdvgu5RsDk5w8dVkL07LK3B0y+C3ZNR5HM\nKqyQOS8CwvZcx1GNwqaG43C/lhL+ED2P1FuvEy3ELcKZRf/QCKmds8m/8wAZZ/xu\nB0opz9PRY+FOj1rfGUYh9lcfTeNXo8fG57QwpIrmjlYCaQRi3mK2p7UL4wOKWDST\nOUdHkVonfwKBgES9ggoIviTlMeF50t/MqnBj4+tGm2odyG7dxblHnZZ/FQOsAoAd\nkq9Mo9s3aEMnq+Cxo9TAQm+4TBy2jbYL+jxjpQs+xvuy168E62WfW5nTy9PoOqhZ\nKsTwqPf43AhR+h3wStoYx8nNA2Xy1bA7miReOtnBRof17BnZr12IOt+TAoGATaoE\nnS4E3ad4CcRuyy4kIiryXBXTp5mLnUDNE+6TYpo6g6BkFgy5GsGKee/sUwQJK9kr\nC5TiELYeVGTKBmkiT1PrM8m+nSdoqHjxJtfdzpb3EPbw0vcdM0P+m75CBC4fCLGa\n0Pawl7P+t/VkTeSqGmN+69zlHo1qTK5hItXsB60CgYEAi5DGu7QKNnQPROXf56MN\nAjzm8KD0XkhyHIfuGykY9fh1E289lV+EoDBQSwfrrR2U5lp56gPVOLBtYYlUlgsV\nY0nGLGBzRLUpIcrZ9ixcfBQligAIJ6a6aJDRTt8xGlXZHRa3ZkC9ANcGjXXkYcDG\nSExbI21uNpSWI6mEGSEfYY0=\n-----END PRIVATE KEY-----\n",
};

function generatePubPrivKey() {
  const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048, // the length of the key in bits
    publicKeyEncoding: {
      type: "spki", // the type of encoding for the public key
      format: "pem", // the format of the output for the public key
    },
    privateKeyEncoding: {
      type: "pkcs8", // the type of encoding for the private key
      format: "pem", // the format of the output for the private key
    },
  });
  return { public: publicKey, privateKey: privateKey };
}

function encryptMessage(message = "") {
  const encryptor = new NodeRSA(cryptoKey.public);

  return encryptor.encrypt(message, "base64");
}

function decryptMessage(encryptedMessage) {
  const key = new NodeRSA(cryptoKey.privateKey);
  return key.decrypt(encryptedMessage, "utf8");
}

const message = "Hello this is encrypted message from shu wei";

// example
const encryptedMesage =
  "XwjzTKanUwUpbNsc8zc3GB+nVny5jUEPDW/d/d8Fqn6EPFjBt58QPbgJNRXwCt8chGnQ/x3vFHc/TzUQWWErLC2kJzHHUiNcedxzXoWyQ+3lC6xSPV1sULbRgICYsTEdDhabGNXyLFZCCIVqtj9wzWF6P1izPUGNFN0mJQg7zYqb8dkfGdmCkhbMRw8Fzp3BuXQ1a9KILStDuNaUfQNjYNKUqEWU+LZVLY6LovZ8lCM9zR6bEb2qTKT2kptXtrPIyPnwdGh5oYIAs4ptt/fmUrhIVEhMlzGF2Zz5lavfV/hoWLfw5zLVeQiyufQJdgdRwhuLNpQqA2N6IL5I5dHINg==";

const encrypted = encryptMessage(message);

export default async function handler(req, res) {
  const message = decryptMessage(encryptedMesage);

  res.status(200).send(message);
}
