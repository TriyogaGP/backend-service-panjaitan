'use strict';

const AdminScheme = Sequelize => {
  const { DataTypes } = Sequelize;

  return {
    idAdmin: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id_admin'
    },
    consumerType: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'consumer_type'
    },
    wilayah: {
      type: DataTypes.STRING(5),
      allowNull: false,
      field: 'wilayah',
    },
    nama: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'nama',
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'username',
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'password',
    },
		kataSandi: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'katasandi',
		},
		fotoProfil: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'foto_profil',
		},
    statusAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      default: 1,
      field: 'status_admin',
    },
    createBy: {
			type: DataTypes.STRING(32),
			allowNull: true,
			field: 'create_by'
    },
    updateBy: {
			type: DataTypes.STRING(32),
			allowNull: true,
			field: 'update_by'
    },
    deleteBy: {
			type: DataTypes.STRING(32),
			allowNull: true,
			field: 'delete_by'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: true,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: true,
      field: 'updated_at',
    },
    deletedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
      allowNull: true,
      field: 'deleted_at',
    },
  };
};

module.exports = {
  AdminScheme,
  ModelFn: (sequelizeInstance, Sequelize) => {
    const Admin = sequelizeInstance
      .define(
        'Admin',
        AdminScheme(Sequelize),
        {
          sequelizeInstance,
          tableName: 'm_admin',
          modelName: 'Admin',
          underscored: true,
          timestamps: false,
          paranoid: true,
        },
      );
		
    Admin.associate = models => {
      models.Admin.belongsTo(models.RoleAdmin, {
        foreignKey: 'consumerType',
        constraint: false
      });
    }
    return Admin;
  },
};
