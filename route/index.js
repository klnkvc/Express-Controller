import express from 'express'
import siswaRoute from '../route/siswa.route.js'

const router = express()

router.use(siswaRoute)


export default router
