const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefacontroller');

router.post('/tarefas', tarefaController.createTarefa);

router.get('/tarefas', tarefaController.getTarefas);

router.get('/tarefas/:id', tarefaController.getTarefaById);

router.put('/taredas/:id', tarefaController.updateTarefa);

router.delete('/tarefas/:id', tarefaController.deleteTarefa);

module.exports = router;





