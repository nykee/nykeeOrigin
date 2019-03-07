/*压缩图片*/

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const conf =require("./config");

const JPG =conf.JPEGImages;
const PNG =conf.PNGImages;
const out=conf.outputPath;
const optimiseJPEGImages = () =>
  imagemin([JPG], out, {
    plugins: [
      imageminMozjpeg({
        quality: 70,
      }),
    ]
  });

const optimisePNGImages = () =>
  imagemin([PNG], out, {
    plugins: [
      imageminPngquant({ quality: '65-80' })
    ],
  });

const convertPNGToWebp = () =>
  imagemin([PNG], out, {
    use: [
      imageminWebp({
        quality: 85,
      }),
    ]
  });
const convertJPGToWebp = () =>
  imagemin([JPG], out, {
    use: [
      imageminWebp({
        quality: 75,
      }),
    ]
  });
optimiseJPEGImages()
  .then(() => optimisePNGImages())
  .then(() => convertPNGToWebp())
  .then(() => convertJPGToWebp())
  .catch(error => console.log(error));


