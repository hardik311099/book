/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from 'lodash';
import { verifyJWTToken } from '../../config/auth';
import db from '../../models';
let model = 'Admin';

class ApplicationController {
  errors: any;
  constructor(m) {
    model = m;
  }

  async _create(req, res, options = {}, callback = null) {
    const user = await db[model].findOne({ where: { email: req.body.email }});
    if (!user) {
      return db[model]
        .create(req.body)
        .then(appuser =>
          res.status(201).send({
            success: true,
            data: appuser,
            message: options['message'] || 'Successfully Created',
          })
        )
        .catch(error => res.status(400).json({ errors: error }));
    }
    return res.status(400).json({ success: false, message: 'user already exits!' });
  }

  _list(req, res, options = {}, callback = null) {
    return db[model]
      .findAll({ include: [{ all: true }] })
      .then(data => res.status(200).send({ success: true, data: data }))
      .catch(error => res.status(400).json({ errors: error }));
  }

  _findOne(req, res, callback = null) {
    return db[model].findOne(req.condition || {}).then(data => {
      if (typeof (callback) === 'function')
        callback(data);
      else
        res.status(200).send(data);
    }
    ).catch(error => res.status(400).json({ errors: error }));
  }
  _update(req, res, options = {}, callback = null) {
    const id = req.params.id;
    return db[model]
      .update(req.body, { where: { id: id }})
      .then(appfeature =>
        res.status(201).send({
          success: true,
          data: appfeature,
          message: options['message'] || 'Successfully Updated',
        })
      )
      .catch(error => res.status(400).json({ errors: error }));
  }

  _delete(req, res, options = {}, callback = null) {
    const id = req.params.id;
    return db[model]
      .destroy({ where: { id: id }})
      .then(data =>
        res.status(200).send({
          success: true,
          data: data,
          message: options['message'] || 'Successfully Deleted',
        })
      )
      .catch(error => res.status(400).json({ errors: error }));
  }

  private isCallback(cb) {
    return typeof cb === 'function';
  }
  private model() {
    return db[model];
  }
}

export default ApplicationController;
