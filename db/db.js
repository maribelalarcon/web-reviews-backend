const mysql = require("mysql2/promise");

const getClient = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "d7qo17834q",
    database: "reviews",
  });
  return connection;
};

module.exports = {
  getClient,
};
