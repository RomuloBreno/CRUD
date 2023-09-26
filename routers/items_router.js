//const Router = requeire("express").Router;
const {Router, response} = require("express");
const router = Router();
const testeController = require("../controllers/items_controller")

//get
router.get('/item',(req, res)=>{
    const resposta = testeController.select();
    resposta
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(200).json(error.message))
});

//post
router.post('/item',(req, res)=>{
    const resposta = testeController.create();
    res.send(resposta);
});

//put
router.get('/item/:id',(req, res)=>{
    const {id} = req.params;
    const resposta = testeController.update(id);
    res.send(resposta);
    res.send(`${id}`);
});

//delete
router.delete('/item/:id',(req, res)=>{
    const {id} = req.params;
    const resposta = testeController.delete(id);
    res.send(resposta);
});

module.exports = router;