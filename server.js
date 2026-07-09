import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';

const app = express();
const port = process.env.PORT || 8082;

app.use(bodyParser.json());

// @TODO1 IMPLEMENT A RESTFUL ENDPOINT
app.get('/filteredimage', async (req, res) => {
  const { image_url } = req.query;

  // 1. Validate the image_url query
  if (!image_url) {
    return res.status(422).send('image_url is required');
  }

  try {
    // 2. Call filterImageFromURL to filter the image
    const filteredpath = await filterImageFromURL(image_url);

    // 3. Send the resulting file in the response
    res.sendFile(filteredpath, async () => {
      // 4. Delete any files on the server on finish of the response
      await deleteLocalFiles([filteredpath]);
    });

  } catch (error) {
    console.log('Error:', error.message);
    res.status(422).send(`Could not process the image: ${error.message}`);
  }
});

// Root Endpoint
app.get("/", async (req, res) => {
  res.send("try GET /filteredimage?image_url={{URL}}")
});

// Start the Server
app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
  console.log(`press CTRL+C to stop server`);
});