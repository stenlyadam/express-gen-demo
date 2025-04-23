//Layer repository berfungsi untuk komunikasi dengan
// database boleh ODM boleh juga pakai raw query

const Users = require("./user.model");

const findAll = async () => {
  const users = await Users.find();
  return users;
};

const findById = async (id) => {
  const users = await Users.findById(id);
  return users;
};

module.exports = {
  findAll,
  findById,
};
