'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'Demo-licious',
        imageUrl: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/No_Image_Available.jpg'
      },
      {
        userId: 2,
        title: 'Moonlight Densetsu Lo-Fi Remix',
        imageUrl: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/moonlight-densetsu-lo-fi-remix.jpg',
      },
      {
        userId: 3,
        title: 'Mumford & Sons - I Will Wait (Bloombox & Sam Feldt Remix)',
        imageUrl: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/i-will-wait-mumford-and-sons-bloombox-and-sam-feldt-remix.jpg',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
