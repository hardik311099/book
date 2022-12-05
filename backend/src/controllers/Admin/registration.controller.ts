import { ApplicationController } from '.';
export class RegistrationController extends ApplicationController {
  constructor() {
    super('Admin');
  }
  signup(req, res) {
    req.pick = [ 'email',  'userName', 'password'];
    return super._create(req , res, { message: 'Congrats! You have successfully registered' });
  }
}
