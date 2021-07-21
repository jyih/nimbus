'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'patrickmoonbird@artists.com',
        username: 'Patrick Moon Bird',
        hashedPassword: bcrypt.hashSync('artist'),
      },
      {
        email: 'samfeldt@artists.com',
        username: 'Sam Feldt',
        hashedPassword: bcrypt.hashSync('artist'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
