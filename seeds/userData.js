const { User } = require('../models');

const userdata = [
  {
    username: 'Summer',
    password: 'winter',
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

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;