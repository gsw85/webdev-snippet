export default async function handler(req, res) {
  // Fetching the content from mr deep
  const fetchResult = await fetch(`https://www.example.com/imagename.jpg`);
  const getBuffer = await fetchResult.buffer();
  const baseString = getBuffer.toString("base64"); // "/9j/4AAQSkZJRgABAQAAAQABAAD/..."

  // this is the status of the image result
  const status = fetchResult.status;

  res.status(status).send(baseString);
}
