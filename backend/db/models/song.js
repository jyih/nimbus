"use strict";
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define("Song",
    {
      userId: DataTypes.INTEGER,
      albumId: DataTypes.INTEGER,
      url: DataTypes.STRING,
      title: DataTypes.STRING,
    },
    {}
  );

  Song.upload = async function ({ albumId, url, title }) {
    const song = await Song.create({
      albumId,
      url,
      title
    });
    return await Song.findByPk(song.id)
  }

  Song.associate = function (models) {
    Song.belongsTo(models.User, { foreignKey: "userId" });
    Song.belongsTo(models.Album, { foreignKey: "albumId" });
    Song.hasMany(models.Comment, { foreignKey: "songId" });
  };
  return Song;
};
