'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 2,
        title: 'Moonlight Densetsu Lo-Fi Remix',
        imageUrl: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/moonlight-densetsu-lo-fi-remix.jpg',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
