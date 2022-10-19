/* istanbul ignore file */
import express from 'express';
import { Sequelize } from 'sequelize';
import { appConfig } from './config';
import config from './config/env';
import Logger from './config/logger';
import { constants } from './app/utils';

const app = express();
global.logger = Logger.createLogger({ label: 'TEMPORAL_PROJECT' });

appConfig(app);
const port = config.PORT || 3249;
const db = new Sequelize(
  config.DATABASE_URL
);

try {
  db.authenticate();
  logger.info('Postgres db connected successfully');
  app.listen(port, () => {
    logger.info(`${constants.TEMPORAL_PROJECT_RUNNING} ${port}`);
  });
} catch (e) {
  logger.info(e);
  logger.info('Postgres db connection failed');
}
export default app;
