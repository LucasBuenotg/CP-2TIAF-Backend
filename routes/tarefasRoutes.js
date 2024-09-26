
//rotas da maldade

const express = require('express');
const router = express.Router();
const tarefaControlle = require('../controllers/tarefacontroller');

router.post('/tarefas', tarefaController.createTarefa);

router.get('/tarefas', tarefaController.getTarefas);

router.get('/tarefas/:id', tarefacontroller.getTrefaById);

router.put('/taredas/:id', tarefaControlle.updateTarefa);

router.delete('/tarefas/:id', tarefaCOntroller.deleteTarefa);

module.exports = router;





