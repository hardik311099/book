const multer = require('multer');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '/../../../book/public/img');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let uploadFile = multer({ storage: storage });

export = uploadFile;
