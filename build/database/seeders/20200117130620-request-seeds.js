"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('requests', [{
    requester_id: 1,
    requester_fullnames: 'Joel Romans',
    requestee_id: 2,
    requestee_fullnames: 'Ray Kings',
    request_status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    requester_id: 2,
    requester_fullnames: 'Ray Kings',
    requestee_id: 3,
    requestee_fullnames: 'Donald Trump',
    request_status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('requests', null, {})
};
//# sourceMappingURL=20200117130620-request-seeds.js.map