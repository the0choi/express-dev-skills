var express = require('express');
var router = express.Router();

var skillsController = require('../controllers/skills');

router.get('/', skillsController.index);
router.get('/new', skillsController.new);
router.get('/:id', skillsController.show);
router.post('/', skillsController.create);
router.delete('/:id', skillsController.delete);
router.get('/:id/edit', skillsController.edit)
router.put('/:id', skillsController.update)

module.exports = router;