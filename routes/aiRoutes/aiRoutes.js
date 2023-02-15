const express = require('express')
const path = require('path');

const aiController = require('../../controllers/aiControllers/academicInvolvement')
const router = express.Router();

router.use(express.json())

//add-user

router.post('/certification-of-courses-alloted/ai1_getMaxMarks', aiController.ai1_getMaxMarks);
router.post('/certification-of-courses-alloted', aiController.ai1);
router.post('/exam-related-work', aiController.ai12);
router.post('/preview-of-grades-achieved-in-the-previoud-semester', aiController.ai13)

module.exports = router;