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
    // {
    //   await User.create({
    //     username: "Atelier de Caen",
    //     firstname: "Beatrice",
    //     name: "ALEXANDRE",
    //     email: "beatrice@gmail.com",
    //     password: "cerche",
    //     confirmpassword: "cerche",
    //   });
    // }
    console.log(
      "***Connexion a phpmyadmin mariadb base de donnee eiceramique connecté ok root et sans mot de passe****"
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

/*OPENCLASSROOMS ne fonctionne pas car pas compathible avec
app.get("/users", (req, res, next) => {
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "Mon premier objet",
      description: "Les infos de mon premier objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 4900,
      userId: "qsomihvqios",
    },
    {
      _id: "oeihfzeomoihi",
      title: "Mon deuxième objet",
      description: "Les infos de mon deuxième objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 2900,
      userId: "qsomihvqios",
    },
  ];
  res.status(200).json(users);
});
*/
//AVEC VIDEO SEQUELIZE
//creation d'un model
const User = sequelize.define("User", {
  userId: {
    type: DataTypes.STRING,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  name: {
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
});
//FIN initialisation DB server

//get
app.get("/", async (req, res) => {
  // res.send("Hello World server lancé !!");
  //affichage dans le site web avec users et non Users car sequelize change tour le nom en minuscule et avec un s
  const users = await User.findAll();
  console.log("users : ", users);
  const usersDisplay = users.map((user) => {
    return `${user.dataValues.username} - ${user.dataValues.email}`;
  });
  //si dessous , si il n'y a pas de reponses la page recharge indefiniment !
  res.send(usersDisplay.join(" // "));
});
app.post("/register-user", async (req, res) => {
  console.log("req.body", req.body);
  await User.create({
    username: req.body.username,
    firstname: req.body.firstname,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword,
  });
  res.redirect("/");
});

//export app pour y avoir acces dans tout les fichiers dont le server ect...
module.exports = app;
