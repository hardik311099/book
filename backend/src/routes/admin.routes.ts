import { createAccountSchema } from '../validation/user.validation';
import { verifyJWT_MW } from '../config/middlewares';
import { END_POINT } from '../constant/endpoint';
import { UsersController, RegistrationController, SessionController } from '../controllers/Admin';

export function initRoutes(app, router) {
  const apiRoute = router;
  const users = new UsersController();
  // const update= new UpdateController()
  const registration = new RegistrationController();
  const session = new SessionController();

  router.get('/', (req, res) => res.status(200).send({ message: 'Admin Server is running!' }));
  
  apiRoute.post(END_POINT.LOGIN, session.login);
  apiRoute.post(END_POINT.SIGNUP,createAccountSchema, registration.signup);
  // apiRoute.put("/update", update.update)
  apiRoute.get("/listone", users.list)

  apiRoute.route('*').all(verifyJWT_MW);

  return router;
}
