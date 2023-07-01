'use strict';

const WilayahPanjaitanScheme = Sequelize => {
  const { DataTypes } = Sequelize;

  return {
    id: {
      type: DataTypes.INTEGER,
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
  WilayahPanjaitanScheme,
  ModelFn: (sequelizeInstance, Sequelize) => {
    const WilayahPanjaitan = sequelizeInstance
      .define(
        'WilayahPanjaitan',
        WilayahPanjaitanScheme(Sequelize),
        {
          sequelizeInstance,
          tableName: 'm_wilayah_panjaitan',
          modelName: 'WilayahPanjaitan',
          underscored: true,
          timestamps: false,
          paranoid: true,
        },
      );

    return WilayahPanjaitan;
  },
};
