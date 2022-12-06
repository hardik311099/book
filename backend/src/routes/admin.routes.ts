import { createAccountSchema } from '../validation/user.validation';
import { verifyJWT_MW } from '../config/middlewares';
import { END_POINT } from '../constant/endpoint';
import { AdminController } from '../controllers/index';

export function initRoutes(app, router) {
  const apiRoute = router;

  const Admin = new AdminController();

  router.get('/', (req, res) =>
    res.status(200).send({ message: 'Admin Server is running!' })
  );

  apiRoute.post(END_POINT.SIGNUP, createAccountSchema, Admin.create);
  apiRoute.post(END_POINT.LOGIN, Admin.login);
  apiRoute.delete(END_POINT.DELETE, Admin.delete);
  apiRoute.put(END_POINT.UPDATE, Admin.update);
  apiRoute.get(END_POINT.GET, Admin.list);

  apiRoute.route('*').all(verifyJWT_MW);

  return router;
}
