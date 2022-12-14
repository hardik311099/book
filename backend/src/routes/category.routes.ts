import { CategoryController } from '../controllers/index';
import { END_POINT } from '../constant/endpoint';

export function initRoutes(app, router) {
  const apiRoute = router;

  const Category = new CategoryController();
  router.get('/', (req, res) => {
    res.status(200).send({ message: 'Category Server is runung' });
  });
  apiRoute.post(END_POINT.CREATE, Category.create);
  apiRoute.get(END_POINT.GETID, Category.findone);
  apiRoute.get(END_POINT.GET, Category.list);
  apiRoute.delete(END_POINT.DELETE, Category.delete);
  apiRoute.put(END_POINT.UPDATE, Category.update);

  return router;
}
