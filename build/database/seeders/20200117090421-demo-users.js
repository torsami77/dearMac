"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [{
    email: 'clicksamst@yahoo.com',
    mobile: '002348037367767',
    first_name: 'Joel',
    second_name: 'Romans',
    gender: 'male',
    marital_status: 'single',
    date_of_birth: 'Fri Jan 17 2000 10:28:32 GMT+0100 (West Africa Standard Time)',
    career_industry: 'Technology',
    name_of_employer: 'Andela',
    job_description: 'Software Engineer',
    highest_academic_qualification: 'PHD Robotics',
    name_of_institution: 'Oxford University',
    friends: '[1,2,34]',
    pictures: '["https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png?resize=502%2C494&ssl=1",]',
    password: '$2y$10$/oQUgTNIVkZca1WhnSCo9OPsdTE66am8W2QZ3EK7FWkpgJVyfOOJe',
    is_verified: true,
    notifications: 0,
    social_media_auth: 'string',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    email: 'logical@yahoo.com',
    mobile: '002348037367769',
    first_name: 'Ray',
    second_name: 'Kings',
    gender: 'female',
    marital_status: 'single',
    date_of_birth: 'Fri Jan 17 2005 10:28:32 GMT+0100 (West Africa Standard Time)',
    career_industry: 'Agriculture',
    name_of_employer: 'Loya Farms',
    job_description: 'Marketer',
    highest_academic_qualification: 'Bsc Marketing',
    name_of_institution: 'University of Jos',
    friends: '[34, 4, 8, 9]',
    pictures: '["https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png?resize=502%2C494&ssl=1",]',
    password: '$2y$10$/oQUgTNIVkZca1WhnSCo9OPsdTE66am8W2QZ3EK7FWkpgJVyfOOJe',
    is_verified: true,
    notifications: 1,
    social_media_auth: 'string',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {})
};
//# sourceMappingURL=20200117090421-demo-users.js.map