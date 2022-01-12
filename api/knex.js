const env = process.env.NODE_ENV || "development";
const config = require("../knexfile")[env];

export default require("knex")(config);
