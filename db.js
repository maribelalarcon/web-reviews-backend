import mysql from "mysql2/promise";

try {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "review_pages",
  });
  console.log("Conexión exitosa a la base de datos.");
  return connection;
} catch (error) {
  console.error(error);
}
export default connection;
