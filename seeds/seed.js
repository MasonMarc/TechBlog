const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedPost = require('./postData');

const init = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  
  await seedPost();
  
  process.exit(0);
};

init();
