'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {//2
        email: 'patrickmoonbird@artists.com',
        username: 'Patrick Moon Bird',
        hashedPassword: bcrypt.hashSync('artist'),
      },
      {//3
        email: 'samfeldt@artists.com',
        username: 'Sam Feldt',
        hashedPassword: bcrypt.hashSync('artist'),
      },
      {//4
        email: 'bradio@artists.com',
        username: 'BRADIO',
        hashedPassword: bcrypt.hashSync('artist'),
      },
      {//5
        email: 'yungbae@artists.com',
        username: 'Yung Bae',
        hashedPassword: bcrypt.hashSync('artist'),
      },
      {
        email: 'kiryu@artists.com',
        username: 'Kiryu',
        hashedPassword: bcrypt.hashSync('artist'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
