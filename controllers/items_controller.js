const ItemTeste = require('../models/items_model')
class TesteController{
    select(){
        return ItemTeste.select();
    }
    create(){
        return "Criando";
    }
    update(id){
        return "Atualizando" + id;
    }
    delete(id){
        return "Excluindo" + id;
    }
}
module.exports= new TesteController();