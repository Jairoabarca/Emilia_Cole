const express= require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();


/* / */


router.get('/',mainController.home);
router.get('/about',mainController.about);
router.get('/contact',mainController.contact);
router.get('/music',mainController.music);

module.exports = router;