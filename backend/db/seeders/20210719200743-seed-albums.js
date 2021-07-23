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
        imageUrl: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/album-art/moonlight-densetsu-lo-fi-remix.jpg',
      },
      {
        userId: 3,
        title: 'Mumford & Sons - I Will Wait (Bloombox & Sam Feldt Remix)',
        imageUrl: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/album-art/i-will-wait-mumford-and-sons-bloombox-and-sam-feldt-remix.jpg',
      },
      {
        userId: 4,
        title: 'LA PA PARADISE',
        imageUrl: 'https://static.qobuz.com/images/covers/67/67/0190295736767_600.jpg',
      },
      {//5
        userId: 4,
        title: 'Joyful Style',
        imageUrl: 'https://m.media-amazon.com/images/I/710WR5n2vCL._SS500_.jpg',
      },
      {
        userId: 4,
        title: 'FREEDOM',
        imageUrl: 'https://m.media-amazon.com/images/I/710WR5n2vCL._SS500_.jpg',
      },
      {
        userId: 5,
        title: 'Bae 5',
        imageUrl: 'https://f4.bcbits.com/img/a1514091039_10.jpg',
      },
      {
        userId: 6,
        title: 'Yakuza Zero OST',
        imageUrl: 'https://lyricstranslate.com/files/styles/large/public/images-7_0.jpeg',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
