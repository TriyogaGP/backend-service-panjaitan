const { Router } = require('express');
const {
  getDashboard,
  getAdmin,
  getAdminbyUid,
  postAdmin,
  getBiodata,
  getBiodatabyUid,
  postBiodata,
  downloadTemplate,
  importExcel,
  exportExcel,
  pdfCreate,
  pdfCreateRaport,
  testing,
} = require('../controllers/user.controller')
const { uploadFile } = require('../middleware/uploadFile')
const { verifyToken } = require('../middleware/VerifyToken');


module.exports = models => {
  const route = Router();

  route.route('/dashboard')
    .get(verifyToken, getDashboard(models))
  
  route.route('/admin')
    .get(verifyToken, getAdmin(models))
    .post(verifyToken, postAdmin(models))
  route.route('/admin/:uid')
    .get(verifyToken, getAdminbyUid(models))
  
  route.route('/biodata')
    .get(verifyToken, getBiodata(models))
    .post(verifyToken, postBiodata(models))
  route.route('/biodata/:uid')
    .get(verifyToken, getBiodatabyUid(models))
  
  // route.route('/siswasiswi')
  //   .get(verifyToken, getSiswaSiswi(models))
  //   .post(verifyToken, postSiswaSiswi(models))
  // route.route('/siswasiswi/:uid')
  //   .get(verifyToken, getSiswaSiswibyUid(models))
  // route.route('/walikelas')
  //   .get(verifyToken, getWaliKelas(models))
  // route.route('/update-peringkat')
  //   .get(verifyToken, updatePeringkat(models))
  // route.route('/jadwal')
  //   .get(verifyToken, getJadwalMengajar(models))
  //   .post(verifyToken, postJadwalMengajar(models))
  // route.route('/nilai')
  //   .get(verifyToken, getPenilaian(models))
  //   .post(verifyToken, postPenilaian(models))
  // route.route('/template/:roleID')
  //   .get(downloadTemplate(models))
  // route.route('/importexcel')
  //   .post(uploadFile, importExcel(models))
  // route.route('/exportexcel')
  //   .get(verifyToken, exportExcel(models))
  // route.route('/pdfcreate/:uid')
  //   .get(verifyToken, pdfCreate(models))
  // route.route('/pdfcreate-raport/:uid')
  //   .get(verifyToken, pdfCreateRaport(models))

  // route.route('/testing')
  //   .post(testing(models))
  
  return route;
}