'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        author: 'J.K. ROWLING',
        title: 'Harry Potter',
        pageQuantity: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        author: 'J.K. ROWLING',
        title: 'Harry Potter 2',
        pageQuantity: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
