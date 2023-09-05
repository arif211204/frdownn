"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(`Users`, [
      {
        fullName: "test",
        email: "test@mail.com",
        username: "test",
        phone_number: "08123323323",
        password: "Password",
        image_url:
          "https://i.pinimg.com/236x/01/a8/e2/01a8e2f85baa938e248860b41399bbee.jpg",

        gender: "male",
        uid_google: null,
        uid_facebook: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "arif",
        email: "arif@gmail.com",
        username: "arif",
        phone_number: "0812",
        password: "arifarifah",
        image_url:
          "https://i.pinimg.com/236x/c9/89/a2/c989a283de587514c3de0adf147d8ad1.jpg",
        gender: "male",
        uid_google: "114663336155787148437",
        uid_facebook: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "arif123",
        email: "arif123@mail.com",
        username: "arif123",
        phone_number: "08123",
        password: "arifarifah",
        image_url:
          "https://i.pinimg.com/236x/43/d6/43/43d64341e68bf1082934d42a6fc15234.jpg",
        gender: "male",
        uid_google: null,
        uid_facebook: "10222445313553844",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "arif12 ",
        email: "arif12@mail.com",
        username: "arif12",
        password: "arifarifah",
        phone_number: "081234",
        image_url:
          "https://i.pinimg.com/236x/ff/f3/26/fff326eabfa13913ea06693b57db2705.jpg",
        gender: "male",
        uid_google: null,
        uid_facebook: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
