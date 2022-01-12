exports.up = async function (knex) {
  await knex.schema.createTable("measurements", function (table) {
    table.increments();
    table.string("weight").notNullable();
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamps();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("measurements");
};
