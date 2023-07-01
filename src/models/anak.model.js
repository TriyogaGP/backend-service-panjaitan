'use strict';

const AnakScheme = Sequelize => {
  const { DataTypes } = Sequelize;

  return {
    idAnak: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_anak'
    },
    idBiodata: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'id_biodata',
    },
    namaAnak: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'nama_anak',
    },
  };
};

module.exports = {
  AnakScheme,
  ModelFn: (sequelizeInstance, Sequelize) => {
    const Anak = sequelizeInstance
      .define(
        'Anak',
        AnakScheme(Sequelize),
        {
          sequelizeInstance,
          tableName: 'm_anak',
          modelName: 'Anak',
          underscored: true,
          timestamps: false,
          paranoid: true,
        },
      );

    return Anak;
  },
};
