const knex = require("../database/db")


class Register {
    async createUser(name,sobrenome,phone){
        try{
            await knex.insert({name,sobrenome,phone}).table("register")
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = new Register()