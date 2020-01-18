'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      second_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      marital_status: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.STRING
      },
      career_industry: {
        type: Sequelize.STRING
      },
      name_of_employer: {
        type: Sequelize.STRING
      },
      job_description: {
        type: Sequelize.STRING
      },
      highest_academic_qualification: {
        type: Sequelize.STRING
      },
      name_of_institution: {
        type: Sequelize.STRING
      },
      friends: {
        type: Sequelize.STRING
      },
      pictures: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      is_verified: {
        type: Sequelize.BOOLEAN
      },
      notifications: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      social_media_auth: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};