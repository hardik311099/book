/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from 'lodash';
import db from '../../models/index';
let model = 'Book';

class ApplicationController {
  errors: any;
  constructor(m) {
    model = m;
  }

  async _create(req, res, options = {}, callback = null) {
    console.log(req.body);
    // let book={
    //   bookname: req.body.bookname,
    //   authore: req.body.authore,
    //   images: [req.files[0].originalname],
    //   category_id: req.body.category_id,
    //   price: req.body.price,
    // }
    console.log(req.body.category_id);

    // console.log("req===",req);[req.files[0].originalname],
    const reqFiles = [];
    // const url = req.protocol + '://' + req.get('host');
    for (let i = 0; i < req.files.length; i++) {
      reqFiles.push('/img/' + req.files[i].originalname);
    }
    return db[model]
      .create({
        bookname: req.body.bookname,
        authore: req.body.authore,
        images: reqFiles.map(f => f),
        category_id: (req.body.category_id as number),
        price: (req.body.price as number),
      })
      .then(appuser => {
        return res.status(201).send({
          success: true,
          data: appuser,
          message: options['message'] || 'Successfully Created',
        });
      })
      .catch(error => {
        console.log('ERROR======',error);

        return res.status(400).json({ errors: error });
      });
  }

  _list(req, res, options = {}, callback = null) {
    return db[model]
      .findAll({ include: [{ all: true }] })
      .then(data => {
        res.status(200).send({ success: true, data: data });
      })
      .catch(error => res.status(400).json({ errors: error }));
  }

  _findOne(req, res, callback = null) {
    db[model]
      .findOne(req.condition || {})
      .then(data => {
        if (typeof callback === 'function') callback(data);
        else res.status(200).send(data);
      })
      .catch(error => res.status(400).json({ errors: error }));
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
      .then(data => {
        return res.status(200).send({
          success: true,
          data: data,
          message: options['message'] || 'Successfully Deleted',
        });
      })
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
