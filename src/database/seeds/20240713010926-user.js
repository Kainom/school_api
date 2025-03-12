"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "alunos",
      [
        {
          nome: "Docker",
          sobrenome: "Linux",
          idade: 20,
          peso: 120.2,
          altura: 1.8,
          email: "Docker@example.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Fera",
          sobrenome: "Feraldo",
          idade: 5,
          peso: 3.2,
          altura: 34,
          email: "Feraldo@example.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
