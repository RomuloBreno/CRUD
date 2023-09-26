const connection = require('../database/connection');
class ItemTeste{
    select(){
        const sql = "SELECT * FROM items";
        return new Promise((resolve, reject)=>{
            connection.query(sql, {}, (error, response)=>{
               if(error){
                   reject(error);
               }
            console.log("Pesquisando");
            resolve(response);
            })
        })

    }
}


module.exports = new ItemTeste();