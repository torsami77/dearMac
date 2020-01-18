'use strict';
module.exports = (sequelize, DataTypes) => {
  const requests = sequelize.define('requests', {
    requester_id: DataTypes.INTEGER,
    requester_fullnames: DataTypes.STRING,
    requestee_id: DataTypes.INTEGER,
    requestee_fullnames: DataTypes.STRING,
    request_status: DataTypes.STRING
  }, {});
  requests.associate = function(models) {
    // associations can be defined here
  };
  return requests;
};