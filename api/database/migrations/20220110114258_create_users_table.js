exports.up = async function (knex) {
  await knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("avatar");
    table.timestamps();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
