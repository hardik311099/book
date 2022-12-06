import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = function (sequelize, DataTypes) {
  const Book = sequelize.define(
    'Book',
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,

        primaryKey: true,
      },
      bookname: {
        type: DataTypes.STRING,
      },
      authore: {
        type: DataTypes.STRING,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: 'Book',
    }
  );

  return Book;
};
