import multer from 'multer';

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../../book/public/img/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export let upload = multer({ storage: storage });
