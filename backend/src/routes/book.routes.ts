import { BookController } from '../controllers/index';
import { END_POINT } from '../constant/endpoint';
import { upload } from '../utils/fileUploader';

export function initRoutes(app, router) {
  const apiRoute = router;

  const Book = new BookController();

  router.get('/', (req, res) =>
    res.status(200).send({ message: 'Admin Server is running!' })
  );

  apiRoute.post(END_POINT.CREATE, upload.single('photos'), Book.create);

  apiRoute.get(END_POINT.GET, Book.list);

  return router;
}
