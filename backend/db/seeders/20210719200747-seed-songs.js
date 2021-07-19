'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      {
        userId: 2,
        albumId: 2,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/Moonlight+Densetsu+Lo-Fi+Remix.mp3',
        title: 'Moonlight Densetsu Lo-Fi Remix',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
    /*
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
