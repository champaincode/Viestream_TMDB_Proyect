const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/index");
const bcrypt = require("bcrypt");



class User extends Model {

  hash(password,salt){
    return bcrypt.hash(password,salt)
  }
} 
User.init(

  {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, 
    modelName: "user", 
  }
    );

    module.exports =  User


    User.beforeCreate((user)=>{ 
      return bcrypt.genSalt(10) // Creas el salt 
      .then(salt => {
        user.salt = salt // igualas al valor de user.salt 
        return user.hash(user.password,salt) //primero traes el password y el salt con bcrypt
      }).then((hash) => {
        user.password = hash
      })
    })