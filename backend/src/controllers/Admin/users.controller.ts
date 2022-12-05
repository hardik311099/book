import  ApplicationController  from './application.controller';
export class UsersController extends ApplicationController {
  constructor() {
    super('Admin');
  }
 
  list(req,res){
    if(!req.body.email){
      req.condition = { where: { userName: req.body.userName }};
    }else{
      req.condition = { where: { email: req.body.email }};
    }
    return  super._findOne(req , res, data => {
      res.status(200).send({success:true, data:data , token:data.generateToken(),message:'Congrats,'})
    })
  }
}
