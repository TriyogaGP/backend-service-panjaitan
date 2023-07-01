'use strict';

const BiodataScheme = Sequelize => {
  const { DataTypes } = Sequelize;

  return {
    idBiodata: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'id_biodata'
    },
    nik: {
      type: DataTypes.STRING(25),
      allowNull: false,
      field: 'nik',
    },
    namaLengkap: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'nama_lengkap',
    },
    tempat: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'tempat',
    },
    tanggalLahir: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'tgl_lahir',
    },
    alamat: {
      type: DataTypes.TEXT,
			allowNull: false,
			field: 'alamat'
    },
    provinsi: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'provinsi'
    },
    kabKota: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'kabkota'
    },
    kecamatan: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'kecamatan'
    },
    kelurahan: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'kelurahan'
    },
    kodePos: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'kode_pos'
    },
    pekerjaan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'pekerjaan'
    },
    pekerjaanLainnya: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'pekerjaan_lainnya'
    },
    telp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'telp'
    },
    namaIstri: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'nama_istri'
    },
    pekerjaanIstri: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'pekerjaan_istri'
    },
    pekerjaanIstriLainnya: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'pekerjaan_istri_lainnya'
    },
    jabatanPengurus: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'jabatan_pengurus'
    },
    wilayah: {
      type: DataTypes.STRING(5),
      allowNull: false,
      field: 'wilayah'
    },
    komisarisWilayah: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'komisaris_wilayah'
    },
    namaKetuaKomisaris: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'nama_ketua_komisaris'
    },
    ompu: {
      type: DataTypes.STRING(5),
      allowNull: false,
      field: 'ompu'
    },
    fotoProfil: {
			type: DataTypes.STRING(256),
      allowNull: true,
      field: 'foto_profil',
    },
    statusMeninggal: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      default: 0,
      field: 'status_meninggal',
    },
    statusBiodata: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      default: 1,
      field: 'status_biodata',
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
  BiodataScheme,
  ModelFn: (sequelizeInstance, Sequelize) => {
    const Biodata = sequelizeInstance
      .define(
        'Biodata',
        BiodataScheme(Sequelize),
        {
          sequelizeInstance,
          tableName: 'm_biodata',
          modelName: 'Biodata',
          underscored: true,
          timestamps: false,
          paranoid: true,
        },
      );
		
    Biodata.associate = models => {
      models.Biodata.hasMany(models.Anak, {
        foreignKey: 'idBiodata',
        targetKey: 'idBiodata',
        constraint: false
      });
      models.Biodata.belongsTo(models.Ompu, {
        foreignKey: 'ompu',
        targetKey: 'kode',
        constraint: false
      });
      models.Biodata.belongsTo(models.WilayahPanjaitan, {
        foreignKey: 'wilayah',
        targetKey: 'kode',
        constraint: false
      });
    }
    return Biodata;
  },
};
