const create = async (client, user) => {
  const sql =
    "INSERT INTO `usuarios`(`nombre`, `contrasena`, `email`) VALUES (?,?,?)";
  const values = [user.nombre, user.contrasena, user.email];
  await client.execute(sql, values);
};

const get = async (client) => {
  const sql = "SELECT * FROM `usuarios`";
  const [rows] = await client.execute(sql);
  return rows;
};

const getById = async (client, id) => {
  const sql = "SELECT * FROM `usuarios` WHERE `id_usuario` = ?";
  const values = [id];
  const [rows] = await client.execute(sql, values);
  return rows[0];
};

const update = async (client, user, id) => {
  const sql =
    "UPDATE `usuarios` SET `nombre` = ?, `contrasena` = ?, `email` = ? WHERE `id_usuario` = ?";
  const values = [user.nombre, user.contrasena, user.email, id];
  await client.execute(sql, values);
};

const remove = async (client, id) => {
  const sql = "DELETE FROM `usuarios` WHERE `id_usuario` = ?";
  const values = [id];
  await client.execute(sql, values);
};

module.exports = {
  create,
  get,
  getById,
  update,
  remove,
};
