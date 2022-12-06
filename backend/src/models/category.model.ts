import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: 'Category',
    }
  );

  return Category;
};
