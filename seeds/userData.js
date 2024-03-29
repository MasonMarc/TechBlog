const { User } = require('../models');

const userdata = [
  {
    username: 'Summer',
    password: 'winter',
  },
  {
    username: 'Fall',
    password: 'spring',
  },
  {
    username: 'Jolene',
    password: 'dolly',
  },
  {
    username: 'Test',
    password: 'test',
  },
];

const seedUser = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUser;