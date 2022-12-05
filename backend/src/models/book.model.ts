
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = function (sequelize, DataTypes) {
  const Book = sequelize.define(
    'Book',
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
     authore: {
        allowNull: false,
        type: DataTypes.STRING
      },
     categoryId: {
        allowNull: false,
        type: DataTypes.STRING,
    
      },
     price: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: 'book',
    }
  );

  return Book;
};
