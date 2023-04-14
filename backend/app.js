const express = require("express");
const app = express();
//dotenv
const dotenv = require("dotenv");
const resultEnv = dotenv.config();
if (resultEnv.error) {
  throw resultEnv.error;
}
//console.log(resultEnv.parsed);
//bodyparser

app.use(express.json());
///CORS pour que le fontend puisse etre e,n relation avec le backend
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const { Sequelize, DataTypes } = require("sequelize");

// initialisation DB server

//// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  `${process.env.DBNAMEBASEDEDONNE}`,
  `${process.env.DB_USERNAME}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: "localhost",
    dialect: "mariadb",
  }
);
//try connection sequelize avec mariadb
(async () => {
  try {
    await sequelize.authenticate();
    await User.sync({ alter: true });
    //  Create a new user pour essai de la base de donnée cela fontion tres bien, attention creer un user a chaque fois
    {
      await User.create({
        userId: 2,
        username: "Atelier de Blois",
        firstname: "Tim2",
        name: "alexandre",
        comment:
          "Atelier mis en place il y a une vingtaine d'années avec une production de grés et four succéssif bois gaz, éléctrique",
        email: "tony@gmail.com",
        password: "cerche",
        confirmpassword: "cerche",
        isadmin: 0,
      });
    }
    console.log(
      "***Connexion a phpmyadmin mariadb base de donnee eiceramique connecté ok root et sans mot de passe****"
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
//AVEC VIDEO SEQUELIZE
//creation d'un model
const User = sequelize.define("User", {
  userId: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  comment: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  confirmpassword: {
    type: DataTypes.STRING,
  },
  isadmin: {
    type: DataTypes.BOOLEAN,
  },
});
//FIN initialisation DB server

//get
app.get("/api/users", async (req, res) => {
  // res.send("Hello World server lancé !!");
  //affichage dans le site web avec users et non Users car sequelize change tour le nom en minuscule et avec un s
  const users = await User.findAll();
  console.log("users : ", users);
  const usersDisplay = users.map((user) => {
    return `${user.dataValues.name} - ${user.dataValues.firstname} - ${user.dataValues.comment} - ${user.dataValues.email} - ${user.dataValues.password} - ${user.dataValues.confirmpassword}`;
  });
  //si dessous , si il n'y a pas de reponses la page recharge indefiniment !
  res.send(usersDisplay.join(" //******</br> "));
});
//poster les users sur la base de donnée
app.post("/api/register-user", async (req, res) => {
  console.log("req.body", req.body);
  await User.create({
    userId: req.body.userId,
    username: req.body.username,
    firstname: req.body.firstname,
    name: req.body.name,
    comment: req.body.comment,
    email: req.body.email,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword,
    isadmin: req.body.isadmin,
  });
  res.redirect("/");
});

module.exports = app;
