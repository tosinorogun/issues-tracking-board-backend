const express = require('express');
const { createIssue, getIssues, getIssue, deleteIssue, updateIssue, getCategory } = require('../controllers/issues');

const router = express.Router();

router.get('/', getIssues);
router.post('/', createIssue);
router.get('/:id', getIssue);
router.delete('/:id', deleteIssue);
router.patch('/:id', updateIssue);
router.get('/status/:id', getCategory);

module.exports = router;
