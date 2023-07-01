const { Router } = require('express');
const {
  updateFile,
  getUID,
  getEncrypt,
  getDecrypt,
  getRole,
  crudRole,
  optionsPekerjaan,
  optionsWilayahPanjaitan,
  optionsOmpu,
  optionsWilayah,
  testing,
} = require('../controllers/settings.controler')
const { uploadFile } = require('../middleware/uploadFile')
const { verifyToken } = require('../middleware/VerifyToken');

module.exports = models => {
  const route = Router();
  route.route('/getUID').get(getUID())
  route.route('/encryptPass').get(verifyToken, getEncrypt())
  route.route('/decryptPass').get(verifyToken, getDecrypt())
  route.route('/optionsPekerjaan').get(optionsPekerjaan(models))
  route.route('/optionsWilayahPanjaitan').get(optionsWilayahPanjaitan(models))
  route.route('/optionsOmpu').get(optionsOmpu(models))
  route.route('/optionsWilayah').get(optionsWilayah(models))
  
  route.route('/updateFile').post(uploadFile, updateFile(models))
  
  route.route('/testing').get(testing(models))
  
  return route;
}