import { createJWToken } from '../config/auth';
import * as bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = function (sequelize, DataTypes) {
  const Admin = sequelize.define(
    'Admin',
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6, 128],
            msg: 'Email address must be between 6 and 128 characters in length',
          },
          isEmail: {
            msg: 'Email address must be valid',
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          min: 6,
        },
      },
    },
    {
      indexes: [{ unique: true, fields: ['email'] }],
      timestamps: true,
      freezeTableName: true,
      tableName: 'Admin',
    }
  );

  Admin.beforeSave((admin) => {
    if (admin.changed('password')) {
      admin.password = bcrypt.hashSync(admin.password, bcrypt.genSaltSync(10));
    }
  });
  Admin.prototype.generateToken = function generateToken() {
    console.log('JWT:' + process.env.SECRET);
    return createJWToken({ email: this.email, id: this.id });
  };

  Admin.prototype.authenticate = function authenticate(value) {
    if (bcrypt.compareSync(value, this.password)) return this;
    else return false;
  };
  return Admin;
};
