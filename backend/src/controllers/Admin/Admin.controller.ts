import { ApplicationController } from '.';
export class AdminController extends ApplicationController {
  constructor() {
    super('Admin');
  }

  create(req, res) {
    req.pick = ['email', 'userName', 'password'];
    return super._create(req, res, {
      message: 'Congrats!👍 You have successfully add feature',
    });
  }
  login(req, res) {
    if (!req.body.email) {
      req.condition = { where: { userName: req.body.userName } };
    } else {
      req.condition = { where: { email: req.body.email } };
    }
    return super._findOne(req, res, (data) => {
      if (data.authenticate(req.body.password))
        return res.status(200).send({
          success: true,
          data: data,
          token: data.generateToken(),
          message: 'Congrats! You have Successfully login',
        });
      else
        return res.status(401).send({
          success: false,
            message: 'Authentication failed.👎 Wrong Password or email.' 
        });
    });
  }
  list(req, res) {
    return super._list(req, res);
  }

  update(req, res) {
    return super._update(req, res, {
      message: 'Congrats! You have successfully update feature',
    });
  }

  delete(req, res) {
    return super._delete(req, res, {
      message: 'Congrats! You have successfully delete feature',
    });
  }
}
