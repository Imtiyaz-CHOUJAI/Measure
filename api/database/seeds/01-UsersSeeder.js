exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([{ id: 1, name: "James" }]);
    });
};
