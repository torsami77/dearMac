'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    first_name: DataTypes.STRING,
    second_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    marital_status: DataTypes.STRING,
    date_of_birth: DataTypes.STRING,
    career_industry: DataTypes.STRING,
    name_of_employer: DataTypes.STRING,
    job_description: DataTypes.STRING,
    highest_academic_qualification: DataTypes.STRING,
    name_of_institution: DataTypes.STRING,
    friends: DataTypes.STRING,
    pictures: DataTypes.STRING,
    password: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
    notifications: DataTypes.INTEGER,
    social_media_auth: DataTypes.STRING
  }, {});

  users.associate = (models) => {
    users.hasMany(models.Requests, { as: 'userRequests', foreignKey: 'requester_id' });
  };
  return users;
};
