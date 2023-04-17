const express = require('express')
const router = express.Router()
const branchControllers = require('../controllers/Branch')

route.get('/',branchControllers.getAllBranches)
router.post('./', branchControllers.createBranchAndManager)
router.put('./:id', brbranchControllers.updateBranch)
router.delete('./:id', managerControllers.deleteManager)

module.exports = router