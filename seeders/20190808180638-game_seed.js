'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Store', [{
      id: 1,
      name: 'Gamestop',
      phoneNumber: 3032221111,
    },
    {
      id: 2,
      name: 'Games R Us',
      phoneNumber: 3032331122,
    },
    {
      id: 3,
      name: 'Games and more Games',
      phoneNumber: 3034443333,
    },
    {
      id: 4,
      name: 'We sell Games',
      phoneNumber: 3038887777,
    },
    ], {});

    return queryInterface.bulkInsert('Games', [{
      title: 'Fix it Felix Jr.',
      price: 50,
      releaseYear: 1982,
      active: true,
      StoreId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ms. Pac Man',
      price: 100,
      releaseYear: 1981,
      active: true,
      StoreId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Dig Dug',
      price: 75,
      releaseYear: 1982,
      active: false,
      StoreId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Galaga',
      price: 125,
      releaseYear: 1981,
      active: true,
      StoreId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
};
