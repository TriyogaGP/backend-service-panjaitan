'use strict';

const OmpuScheme = Sequelize => {
  const { DataTypes } = Sequelize;

  return {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    kode: {
      type: DataTypes.STRING(5),
      allowNull: false,
      field: 'kode',
    },
    label: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'label',
    },
  };
};

module.exports = {
  OmpuScheme,
  ModelFn: (sequelizeInstance, Sequelize) => {
    const Ompu = sequelizeInstance
      .define(
        'Ompu',
        OmpuScheme(Sequelize),
        {
          sequelizeInstance,
          tableName: 'm_ompu',
          modelName: 'Ompu',
          underscored: true,
          timestamps: false,
          paranoid: true,
        },
      );

    return Ompu;
  },
};
