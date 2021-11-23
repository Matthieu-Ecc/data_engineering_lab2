const express = require('express');
const controller = require('../controllers/controllers');
const { body } = require('express-validator');
const router = new express.Router();

router.get('/init', controller.initDatabase);
router.get('/', controller.get_nb_load);
router.post('/hit_reload',
    controller.add_hit_reload    
);

module.exports = router;