import express from 'express';
import chalk from 'chalk';

import './database';

const app = express();

app.listen(3333, () => {
  console.log(chalk.yellow('Application up and running on port 3333'))
});