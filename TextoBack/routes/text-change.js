
const { Router } = require('express');
const { getTexto, getTest } = require('../controllers/text-change.js');

const router = Router();

router.get('/', getTexto );
router.get('/g', getTest );

module.exports = router;