'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      {//1
        userId: 2,
        albumId: 2,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/Moonlight+Densetsu+Lo-Fi+Remix.mp3',
        title: 'Moonlight Densetsu Lo-Fi Remix',
      },
      {
        userId: 3,
        albumId: 3,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/Mumford+%26+Sons+-+I+Will+Wait+(Bloombox+%26+Sam+Feldt+Remix).mp3',
        title: 'Mumford & Sons - I Will Wait (Bloombox & Sam Feldt Remix)',
      },
      {
        userId: 4,
        albumId: 4,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/BRADIO+-+La+Pa+Paradise.mp3',
        title: 'LA PA PARADISE',
      },
      {
        userId: 4,
        albumId: 5,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/BRADIO+-+Shiawase+No+Shanana.mp3',
        title: '幸せのシャナナ',
      },
      {//5
        userId: 4,
        albumId: 5,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/BRADIO+-+Be+Bold.mp3',
        title: 'Be Bold!',
      },
      {
        userId: 4,
        albumId: 6,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/BRADIO+-+Back+To+the+Funk.mp3',
        title: 'Back To The Funk',
      },
      {
        userId: 6,
        albumId: 8,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/Yakuza+OST+-+Baka+Mitai+(%E3%81%B0%E3%81%8B%E3%81%BF%E3%81%9F%E3%81%84).mp3',
        title: 'ばかみたい',
      },
      {
        userId: 5,
        albumId: 7,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/Yung+Bae+-+Pacific+Standard.mp3',
        title: 'Pacific Standard',
      },
      {
        userId: 5,
        albumId: 7,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/Yung+Bae+-+Must+Be+Love.mp3',
        title: 'Must Be Love',
      },
      {
        userId: 5,
        albumId: 7,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/Yung+Bae+-+Start+from+Nothing.mp3',
        title: 'Start from Nothing',
      },
      {//10
        userId: 5,
        albumId: 7,
        url: "https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/Yung+Bae+-+You've+ Got + Me.mp3",
        title: "You've Got Me",
      },
      {
        userId: 5,
        albumId: 7,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/Yung+Bae+-+We+Came+to+Boogie.mp3',
        title: 'We Came to Boogie',
      },
      {
        userId: 5,
        albumId: 7,
        url: 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/songs/Yung+Bae+-+Fell+in+Love.mp3',
        title: 'Fell in Love',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
