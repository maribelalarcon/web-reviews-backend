const create = async (client, local) => {
  const sql = " INSERT INTO `local` (`direccion`) VALUES (?)";
  const values = [local.direccion];
  await client.execute(sql, values);
};

const get = async (client) => {
  const sql = "SELECT * FROM `local` ";
  const [rows] = await client.execute(sql);
  return rows;
};

const getById = async (client, id) => {
  const sql = "SELECT * FROM `local` WHERE `id_local` = ? ";
  const values = [id];
  const [rows] = await client.execute(sql, values);
  return rows[0];
};

const update = async (client, local, id) => {
  const sql = "UPDATE `local` SET `direccion` = ? WHERE `id_local` = ?";
  const values = [local.direccion, id];
  await client.execute(sql, values);
};

const remove = async (client, id) => {
  const sql = "DELETE FROM `local` WHERE `id_local` = ?";
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
