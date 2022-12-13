import { logger } from '../logger/Logger';
import { Sequelize } from 'sequelize';
import { environment } from './index';

const { db_name, db_user, db_password, db_host,db_port, db_driver } = environment;

export const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  port: db_port,
  dialect: db_driver
});

sequelize
  .authenticate()
  .then(() => {
    logger.info('👍 Connection has been established successfully.');
  })
  .catch(err => {
    logger.error('✗ Unable to connect to the database:', err);
  });