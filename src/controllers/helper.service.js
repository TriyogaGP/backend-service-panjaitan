const {
	response,
	OK,
	NOT_FOUND,
	NO_CONTENT
} = require('../utils/response.utils');
const {
	encrypt,
	decrypt,
	createKSUID,
	buildMysqlResponseWithPagination
} = require('../utils/helper.utils');
const { Op } = require('sequelize')
const sequelize = require('sequelize')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { logger } = require('../configs/db.winston')
const nodeGeocoder = require('node-geocoder');
const { sequelizeInstance } = require('../configs/db.config');
const dotenv = require('dotenv');
dotenv.config();
const BASE_URL = process.env.BASE_URL

async function _allOption(params) {
	const { table } = params
	const data = await table.findAll()
	return data
}

async function _pekerjaanOption(params) {
	const { models, kode } = params
	const pekerjaan = await models.Pekerjaan.findOne({ where: { kode }, attributes: ['kode', 'label'] })
	return pekerjaan
}

async function _anakOption(params) {
	const { models, idBiodata } = params
	const anak = await models.Anak.findAll({ where: { idBiodata }, attributes: ['idAnak', 'namaAnak'] })
	return anak
}

async function _wilayahpanjaitanOption(params) {
	const { models, kode } = params
	const wilayahpanjaitan = await models.WilayahPanjaitan.findOne({ where: { kode }, attributes: ['kode', 'label'] })
	return wilayahpanjaitan
}

async function _ompuOption(params) {
	const { models, kode } = params
	const ompu = await models.Ompu.findOne({ where: { kode }, attributes: ['kode', 'label'] })
	return ompu
}

module.exports = {
	_allOption,
	_pekerjaanOption,
	_anakOption,
	_wilayahpanjaitanOption,
	_ompuOption,
}