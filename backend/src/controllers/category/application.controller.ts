/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from 'lodash';
import db from '../../models/index';
let model = 'Category';

class ApplicationController {
  errors: any;
  constructor(m) {
    model = m;
  }

  async _create(req, res, options = {}, callback = null) {
    console.log(req.pick);

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

  _list(req, res, options = {}, callback = null) {
    return db[model]
      .findAll({ include: [{ all: true }] })
      .then(data => res.status(200).send({ success: true, data: data }))
      .catch(error => res.status(400).json({ errors: error }));
  }

  _findOne(req, res, callback = null) {
    const id = req.params.id;
    db[model]
      .findOne({
        where: {
          id: id,
        },
      })
      .then(data => res.status(200).send({ success: true, data: data }))
      .catch(error => res.status(400).json({ errors: error }));
  }

  _update(req, res, options = {}, callback = null) {
    const id = req.params.id;
    return db[model]
      .update({ name: req.body.name }, { where: { id: id }})
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
