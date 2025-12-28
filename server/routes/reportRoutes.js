import express from 'express';

import{
    getUserSummary,
    createReport
} from '../controllers/reportController.js';

const router = express.Router();

// GET a user's reports
router.get('/summary/:userID', getUserSummary);
// POST a new report
router.post('/', createReport);

export default router;
