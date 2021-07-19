"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments",
    {
      userId: DataTypes.INTEGER,
      songId: DataTypes.INTEGER,
      body: DataTypes.TEXT,
    },
    {}
  );
  Comments.associate = function (models) {
    Comment.belongsTo(models.User, {foreignKey: "userId" });
    Comment.belongsTo(models.Song, { foreignKey: "songId" });
  };
  return Comments;
};
