const { decrypt, convertDateTime, dateconvert, convertDate } = require('./helper.utils');
const {
	_agamaOption,
  _citacitaOption,
	_hobiOption,
	_jenjangsekolahOption,
	_statussekolahOption,
	_statusortuOption,
	_pendidikanOption,
	_pekerjaanOption,
	_jabatanOption,
	_mengajarOption,
	_penghasilanOption,
	_statustempattinggalOption,
	_jarakrumahOption,
	_transportasiOption,
	_wilayahOption,
} = require('../controllers/helper.service')
const dotenv = require('dotenv');
dotenv.config();
const BASE_URL = process.env.BASE_URL

function _buildResponseUser(dataUser, refreshToken, accessToken) {
	return {
		idAdmin: dataUser.idAdmin,
		consumerType: dataUser.consumerType,
		namaRole: dataUser.RoleAdmin.namaRole,
		nama: dataUser.nama,
		username: dataUser.username,
		password: dataUser.password,
		kataSandi: dataUser.kataSandi,
		fotoProfil: dataUser.fotoProfil ? `${BASE_URL}image/${dataUser.fotoProfil}` : `${BASE_URL}bahan/user.png`,
		statusAdmin: dataUser.statusAdmin,
		refreshToken,
		accessToken
	}
}

async function _buildResponseAdmin(models, dataUser) {
	let datawilayah = null
	if(dataUser.wilayah !== '00'){
		datawilayah = await models.WilayahPanjaitan.findOne({
			where: { kode: dataUser.wilayah },
			attributes: ['kode', 'label'],
		});
	}
	return {
		idAdmin: dataUser.idAdmin,
		consumerType: dataUser.consumerType,
		kodeWilayah: dataUser.wilayah !== '00' ? datawilayah.kode : dataUser.wilayah ,
		namaWilayah: dataUser.wilayah !== '00' ? datawilayah.label : 'tidak memiliki wilayah' ,
		namaRole: dataUser.RoleAdmin.namaRole,
		nama: dataUser.nama,
		username: dataUser.username,
		password: dataUser.password,
		kataSandi: dataUser.kataSandi,
		fotoProfil: dataUser.fotoProfil ? `${BASE_URL}image/${dataUser.fotoProfil}` : `${BASE_URL}bahan/user.png`,
		statusAdmin: dataUser.statusAdmin,
	}
}

module.exports = {
  _buildResponseUser,
  _buildResponseAdmin,
}