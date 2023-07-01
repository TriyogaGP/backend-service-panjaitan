'use strict';

const RoleAdminScheme = Sequelize => {
  const { DataTypes } = Sequelize;

  return {
    idRole: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_role'
    },
    namaRole: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'nama_role',
    },
    statusRole: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status_role',
    },
  };
};

module.exports = {
  RoleAdminScheme,
  ModelFn: (sequelizeInstance, Sequelize) => {
    const RoleAdmin = sequelizeInstance
      .define(
        'RoleAdmin',
        RoleAdminScheme(Sequelize),
        {
          sequelizeInstance,
          tableName: 'm_role_admin',
          modelName: 'RoleAdmin',
          underscored: true,
          timestamps: false,
          paranoid: true,
        },
      );

    return RoleAdmin;
  },
};
