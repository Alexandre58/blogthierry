const mysql = require("mysql2/promise");

const mysqlConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  database: "eiceramique",
  password: "",
};
/**
 *
 * TODO: IMPLEMENT FUNCTIONALITY TO CLOSE MYSQL CONNECTIONS IN ALL FUNCTIONS
 */
const getCustomers = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute("SELECT * FROM `users`");
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getCustomerById = async (id) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM users WHERE id=${id}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createCustomer = async (
  userId,
  username,
  firstname,
  name,
  comment,
  email,
  password,
  confirmpassword,
  isadmin
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO users(userId,username,firstname,name, comment, email, password, confirmpassword, isadmin) VALUES ("${userId}", "${username}","${firstname}", "${name}", "${comment}", "${email}", "${password}", "${confirmpassword}", "${isadmin}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteCustomerById = async (userId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM users WHERE id = ${userId};`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const customers = {
  getCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomerById,
};

module.exports = customers;
