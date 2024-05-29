import express from 'express'
import { deleteSiswa, getSiswa, getSiswaById, getSiswaTest, insertSiswa, updateSiswa } from '../controller/siswa.controller.js'

const router = express.Router()

router.get('/siswa', getSiswa)
router.get('/siswa/:id', getSiswaById)
router.get('/siswafilter', getSiswaTest)
router.post('/siswa', insertSiswa)
router.put('/siswa/:id', updateSiswa)
router.delete('/siswa/:id', deleteSiswa)


export default router
