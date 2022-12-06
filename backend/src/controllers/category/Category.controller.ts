import { ApplicationController } from '.';
export class CategoryController extends ApplicationController {
  constructor() {
    super('Category');
  }

  create(req, res) {
    req.pick = ['name'];
    return super._create(req, res, {
      message: 'Congrats! You have successfully add feature',
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
