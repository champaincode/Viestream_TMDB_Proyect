// Configuración del server
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { User, Favorito } = require("./models");

//requiriendo la db y el user
const db = require("./config/index");

// inicializando
const app = express();
app.use(cors());

//mostrar el html en realidad react

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(sessions({ secret: "bootcamp" }));
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    { usernameField: "user", passwordField: "password" },
    function (user, password, done) {
      User.findOne({ where: { user } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            //rehashea el password y comparamos con el primer hasheo hecho en models
            if (hash !== user.password) {
              return done(null, false); // si la contraseña no coincide
            }

            return done(null, user); // si la contraseña coincide devuelve el usuario
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});
//direccion de la api
app.use("/api", router);

//start server
//force : true (Actualiza el estado de la db)
//force : false (mantiene el estado de la db)

db.sync({ force: false })
  .then(() => {
    console.log("db conectada");
    app.listen(5000, () => {
      console.log("server  on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
