"use strict";
const bcryptjs = require('bcryptjs');
const { password } = require('../../config/database');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Kainom",
          email: "kainom@felipe.com",
          password_hash: await bcryptjs.hash('rosadesangue123',8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
