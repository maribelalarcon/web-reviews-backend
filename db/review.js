const create = async (client, review) => {
  const sql =
    "INSERT INTO `resenas`(`comentarios`,`id_usuario`, `id_local`) VALUES (?,?,?)";
  const values = [review.comentarios, review.id_usuario, review.id_local];
  await client.execute(sql, values);
};

const get = async (client) => {
  const sql = "SELECT * FROM `resenas`";
  const [rows] = await client.execute(sql);
  return rows;
};

const getById = async (client, id) => {
  const sql = "SELECT * FROM `resenas` WHERE `id_resenas` = ? ";
  const values = [id];
  const [rows] = await client.execute(sql, values);
  return rows;
};

const update = async (client, review, id) => {
  const sql =
    " UPDATE `resenas` SET `comentarios` = ? ,`id_usuario` = ? ,`id_local` = ?";
  const values = [review.comentarios, review.id_usuario, review.id_local];
  await client.execute(sql, values);
};

const remove = async (client, id) => {
  const sql = "DELETE FROM `resenas` WHERE `id_usuario` = ? ";
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
