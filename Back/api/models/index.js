const User = require("./User")
const Favorito = require("./Favoritos")

Favorito.belongsToMany(User, {through: 'users_to_favorites'})
User.hasMany(Favorito) 

module.exports = {User,Favorito}