import fs from "fs";
import Jimp from "jimp";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

export async function filterImageFromURL(inputURL) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(inputURL, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data);
      
      const photo = await Jimp.read(buffer);
      const __dirname = path.dirname(fileURLToPath(import.meta.url));
      const outpath = path.join(__dirname, "filtered." + Math.floor(Math.random() * 2000) + ".jpg");      
      await photo
        .resize(256, 256)
        .quality(60)
        .greyscale()
        .write(outpath, (img) => {
          resolve(outpath);
        });
    } catch (error) {
      reject(error);
    }
  });
}

export async function deleteLocalFiles(files) {
  for (let file of files) {
    fs.unlinkSync(file);
  }
}