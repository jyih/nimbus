'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};