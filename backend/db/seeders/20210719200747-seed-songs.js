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
      {
        userId: 3,
        albumId: 3,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/Mumford+%26+Sons+-+I+Will+Wait+(Bloombox+%26+Sam+Feldt+Remix).mp3',
        title: 'Mumford & Sons - I Will Wait (Bloombox & Sam Feldt Remix)',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
